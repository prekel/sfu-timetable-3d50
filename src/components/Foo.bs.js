// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";

function Foo(Props) {
  var name = Props.name;
  var color = Props.color;
  var colorStr = color ? "blue" : "red";
  return React.createElement("div", {
              className: "color-" + colorStr
            }, name);
}

var make = Foo;

export {
  make ,
  
}
/* react Not a pure module */