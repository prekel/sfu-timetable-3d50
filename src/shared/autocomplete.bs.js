// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Compat from "../utils/compat.bs.js";
import * as Js_json from "rescript/lib/es6/js_json.js";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Belt_Option from "rescript/lib/es6/belt_Option.js";

function $$fetch$1(pattern) {
  return Compat.$$Promise.thenResolve(Compat.$$Promise.then_(fetch("https://prekel-sfu-timetable.builtwithdark.com/autocomplete?pattern=" + encodeURIComponent(pattern)), (function (response) {
                    return response.json();
                  })), (function (json) {
                return Belt_Array.map(Belt_Option.getExn(Js_json.decodeArray(json)), (function (json) {
                              return Belt_Option.getExn(Js_json.decodeString(json));
                            }));
              }));
}

export {
  $$fetch$1 as $$fetch,
  
}
/* No side effect */
