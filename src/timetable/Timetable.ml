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
    | 7 -> Sunday
    | _ -> failwith "No day of week"
    [@@genType]

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
end

module Week = struct
  type t = Uneven | Even [@@genType]

  let fromNumber n =
    match n with 1 -> Uneven | 2 -> Even | _ -> failwith ""
    [@@genType]

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

type lesson = {
  day : Day.t;
  week : Week.t;
  time : LessonTime.t;
  subject : string;
  type_ : string;
  place : string;
  teacher : string option;
  group : string array option;
}

type timetable = {
  timetable : lesson array;
  target : string;
  type_ : [ `teacher | `group ];
}
