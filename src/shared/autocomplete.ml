type t = string array

let fetch pattern : _ Js.Promise.t =
  let open Compat in
  Fetch.fetch
    ( "https://prekel-sfu-timetable.builtwithdark.com/autocomplete?pattern="
    ^ Js.Global.encodeURIComponent pattern )
  |. Promise.then_ (fun response -> Fetch.Response.json response)
  |. Promise.thenResolve (fun json ->
         json |. Js.Json.decodeArray |. Belt.Option.getExn
         |. Belt.Array.map (fun json ->
                json |. Js.Json.decodeString |. Belt.Option.getExn))
