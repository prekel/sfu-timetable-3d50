@genType
type t = [
  | #"8:30-10:05"
  | #"10:15-11:50"
  | #"12:00-13:35"
  | #"14:10-15:45"
  | #"15:55-17:30"
  | #"17:40-19:15"
  | #"19:25-21:00"
]

let decode = (json): t => {
  json->Js.Json.decodeString->Belt.Option.getExn->Obj.magic
}
