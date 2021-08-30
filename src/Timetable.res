module Day = {
  @genType
  type t =
    | Monday
    | Tuesday
    | Wednesday
    | Thursday
    | Friday
    | Saturday
    | Sunday

  @genType
  let toNumber = day => {
    switch day {
    | Monday => 1
    | Tuesday => 2
    | Wednesday => 3
    | Thursday => 4
    | Friday => 5
    | Saturday => 6
    | Sunday => 7
    }
  }

  @genType
  let fromNumber = number => {
    switch number {
    | 1 => Monday
    | 2 => Tuesday
    | 3 => Wednesday
    | 4 => Thursday
    | 5 => Friday
    | 6 => Saturday
    | 7 => Sunday
    | _ => failwith("No day of week")
    }
  }

  @genType
  type en = [
    | #Monday
    | #Tuesday
    | #Wednesday
    | #Thursday
    | #Friday
    | #Saturday
    | #Sunday
  ]

  @genType
  let toRu = day => {
    switch day {
    | Monday => `Понедельник`
    | Tuesday => `Вторник`
    | Wednesday => `Среда`
    | Thursday => `Четверг`
    | Friday => `Пятница`
    | Saturday => `Суббота`
    | Sunday => `Воскресенье`
    }
  }

  @genType
  let toEn = day => {
    switch day {
    | Monday => #Monday
    | Tuesday => #Tuesday
    | Wednesday => #Wednesday
    | Thursday => #Thursday
    | Friday => #Friday
    | Saturday => #Saturday
    | Sunday => #Sunday
    }
  }
}

module Week = {
  @genType
  type t =
    | Uneven
    | Even

  @genType
  let fromNumber = n => {
    switch n {
    | 1 => Uneven
    | 2 => Even
    | _ => failwith("")
    }
  }

  @genType
  let fromDate = (date: Js.Date.t) => {
    let day = date->Js.Date.getDate->Belt.Int.fromFloat
    let month = date->Js.Date.getMonth->Belt.Int.fromFloat
    let year = date->Js.Date.getFullYear->Belt.Int.fromFloat
    let month = month + 1
    let a = Js.Math.floor((14. -. month->Belt.Int.toFloat) /. 12.)
    let y = year + 4800 - a
    let m = month + 12 * a - 3
    let j =
      day +
      Js.Math.floor((153. *. m->Belt.Int.toFloat +. 2.) /. 5.) +
      365 * y +
      Js.Math.floor(y->Belt.Int.toFloat /. 4.) -
      Js.Math.floor(y->Belt.Int.toFloat /. 100.) +
      Js.Math.floor(y->Belt.Int.toFloat /. 400.) - 32045

    let d4 = mod(mod(mod(j + 31741 - mod(j, 7), 146097), 36524), 1461)
    let l = Js.Math.floor(d4->Belt.Int.toFloat /. 1460.)
    let d1 = mod(d4 - l, 365) + l
    let week = Js.Math.floor(d1->Belt.Int.toFloat /. 7.) + 1
    if mod(week, 2) == 0 {
      Even
    } else {
      Uneven
    }
  }
}

@gentype
type lessonTime = [
  | #"8:30-10:05"
  | #"10:15-11:50"
  | #"12:00-13:35"
  | #"14:10-15:45"
  | #"15:55-17:30"
  | #"17:40-19:15"
  | #"19:25-21:00"
]

@genType
type lesson = {
  day: Day.t,
  week: Week.t,
  time: lessonTime,
  subject: string,
  type_: string,
  place: string,
  teacher: option<string>,
  group: option<array<string>>,
}

@genType
type timetable = {
  timetable: array<lesson>,
  target: string,
  type_: [#teacher | #group],
}
