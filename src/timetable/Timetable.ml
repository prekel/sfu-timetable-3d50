module Option = Belt.Option
module Result = Belt.Result
module Json = Js.Json
module Dict = Js.Dict

let decodeStringExn obj key =
  obj |. Dict.get key |. Option.flatMap Json.decodeString |. Option.getExn

module Day = struct
  type t =
    | Monday
    | Tuesday
    | Wednesday
    | Thursday
    | Friday
    | Saturday
    | Sunday
  [@@genType]

  let toNumber day =
    match day with
    | Monday -> 1
    | Tuesday -> 2
    | Wednesday -> 3
    | Thursday -> 4
    | Friday -> 5
    | Saturday -> 6
    | Sunday -> 7
    [@@genType]

  let fromNumber number =
    match number with
    | 1 -> Monday
    | 2 -> Tuesday
    | 3 -> Wednesday
    | 4 -> Thursday
    | 5 -> Friday
    | 6 -> Saturday
    | 7 | 0 -> Sunday
    | _ -> failwith "No day of week"
    [@@genType]

  let decodeExn json =
    Json.decodeString json |> Option.getExn |> Belt.Int.fromString
    |> Option.getExn |> fromNumber

  let toRu day =
    match day with
    | Monday -> {j|Понедельник|j}
    | Tuesday -> {j|Вторник|j}
    | Wednesday -> {j|Среда|j}
    | Thursday -> {j|Четверг|j}
    | Friday -> {j|Пятница|j}
    | Saturday -> {j|Суббота|j}
    | Sunday -> {j|Воскресенье|j}
    [@@genType]

  type en =
    [ `Monday
    | `Tuesday
    | `Wednesday
    | `Thursday
    | `Friday
    | `Saturday
    | `Sunday ]
  [@@genType]

  let toEn day : en =
    match day with
    | Monday -> `Monday
    | Tuesday -> `Tuesday
    | Wednesday -> `Wednesday
    | Thursday -> `Thursday
    | Friday -> `Friday
    | Saturday -> `Saturday
    | Sunday -> `Sunday
    [@@genType]

  let all =
    [| Monday; Tuesday; Wednesday; Thursday; Friday; Saturday; Sunday |]
    [@@genType]
end

module Week = struct
  type t = Uneven | Even [@@genType]

  let fromNumber n =
    match n with 1 -> Uneven | 2 -> Even | _ -> failwith ""
    [@@genType]

  let decodeExn json =
    Json.decodeString json |> Option.getExn |> Belt.Int.fromString
    |> Option.getExn |> fromNumber

  let fromDate (date : Js.Date.t) =
    let day = date |. Js.Date.getDate |. Belt.Int.fromFloat in
    let month = date |. Js.Date.getMonth |. Belt.Int.fromFloat in
    let year = date |. Js.Date.getFullYear |. Belt.Int.fromFloat in
    let month = month + 1 in
    let a = Js.Math.floor ((14. -. (month |. Belt.Int.toFloat)) /. 12.) in
    let y = year + 4800 - a in
    let m = month + (12 * a) - 3 in
    let j =
      day
      + Js.Math.floor (((153. *. (m |. Belt.Int.toFloat)) +. 2.) /. 5.)
      + (365 * y)
      + Js.Math.floor ((y |. Belt.Int.toFloat) /. 4.)
      - Js.Math.floor ((y |. Belt.Int.toFloat) /. 100.)
      + Js.Math.floor ((y |. Belt.Int.toFloat) /. 400.)
      - 32045
    in
    let d4 = (j + 31741 - (j mod 7)) mod 146097 mod 36524 mod 1461 in
    let l = Js.Math.floor ((d4 |. Belt.Int.toFloat) /. 1460.) in
    let d1 = ((d4 - l) mod 365) + l in
    let week = Js.Math.floor ((d1 |. Belt.Int.toFloat) /. 7.) + 1 in
    if week mod 2 == 0 then Even else Uneven
    [@@genType]
end

module Lesson = struct
  type t = {
    day : Day.t;
    week : Week.t;
    time : LessonTime.t;
    subject : string;
    type_ : string;
    teacher : string option;
    groups : string array option;
    place : string;
    building : string;
    room : string;
    sync : string;
  }
  [@@genType]

  let decodeExn json =
    try
      let obj = json |> Json.decodeObject |> Option.getExn in
      let day =
        obj |. Dict.get "day" |. Option.map Day.decodeExn |> Option.getExn
      in
      let week =
        obj |. Dict.get "week" |. Option.map Week.decodeExn |> Option.getExn
      in
      let teacher =
        obj |. Dict.get "teacher" |. Option.flatMap Json.decodeString
      in
      let groups =
        obj |. Dict.get "groups"
        |. Option.flatMap Json.decodeArray
        |. Option.map (Array.map Json.decodeString)
        |. Option.map (Array.map Option.getExn)
      in

      {
        day;
        week;
        time =
          obj |. Dict.get "time"
          |. Option.map LessonTime.decode
          |> Option.getExn;
        subject =
          obj |. Dict.get "subject"
          |. Option.flatMap Json.decodeString
          |> Option.getExn;
        type_ =
          obj |. Dict.get "type"
          |. Option.flatMap Json.decodeString
          |> Option.getExn;
        teacher;
        groups;
        place =
          obj |. Dict.get "place"
          |. Option.flatMap Json.decodeString
          |> Option.getExn;
        building =
          obj |. Dict.get "building"
          |. Option.flatMap Json.decodeString
          |> Option.getExn;
        room =
          obj |. Dict.get "room"
          |. Option.flatMap Json.decodeString
          |> Option.getExn;
        sync =
          obj |. Dict.get "sync"
          |. Option.flatMap Json.decodeString
          |> Option.getExn;
      }
    with error ->
      Js.Console.error error;
      failwith @@ "Failed to decode Lesson"
end

module Timetable = struct
  type t = {
    timetable : Lesson.t array;
    target : string;
    type_ : [ `teacher | `group ];
    institute : string option;
  }
  [@@genType]

  let decode json =
    try
      let obj = json |. Json.decodeObject |> Option.getExn in
      let timetable =
        obj |. Dict.get "timetable"
        |. Option.flatMap Json.decodeArray
        |. Option.map (Array.map Lesson.decodeExn)
        |. Option.getExn
      in
      Ok
        {
          timetable;
          target = obj |. decodeStringExn "target";
          type_ =
            obj |. Dict.get "type"
            |. Option.flatMap Json.decodeString
            |. Option.getExn |. Obj.magic;
          institute =
            obj |. Dict.get "institute" |. Option.flatMap Json.decodeString;
        }
    with error ->
      Js.Console.error error;
      Error "Failed to decode Timetable"

  let fetch target : _ Js.Promise.t =
    let open Compat in
    Fetch.fetch
      ( "https://edu.sfu-kras.ru/api/timetable/get&target="
      ^ Js.Global.encodeURIComponent target )
    |. Promise.then_ (fun response -> Fetch.Response.json response)
    |. Promise.thenResolve (fun json -> decode json)
    [@@genType]

  let fetchOpt target : _ Js.Promise.t =
    fetch target
    |. Promise.thenResolve (function Ok a -> Some a | Error _ -> None)
    [@@genType]

  let fetchExn target : _ Js.Promise.t =
    fetch target
    |. Promise.thenResolve (function
         | Ok a -> a
         | Error error -> failwith error)
    [@@genType]
end
