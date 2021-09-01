// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";

function TargetAutocomplete(Props) {
  var onSubmit = Props.onSubmit;
  return React.createElement(React.Fragment, undefined, React.createElement("form", {
                  className: "form-inline",
                  onSubmit: (function ($$event) {
                      $$event.preventDefault();
                      return Curry._1(onSubmit, "qwe");
                    })
                }, React.createElement("div", {
                      className: "no-gutters row"
                    }, React.createElement("div", {
                          className: "col"
                        }, React.createElement("div", {
                              className: "form-group"
                            }, React.createElement("input", {
                                  className: "mr-sm-2 form-control",
                                  placeholder: "Группа/преподаватель"
                                }))), React.createElement("div", {
                          className: "col"
                        }, React.createElement("button", {
                              className: "btn btn-primary",
                              type: "submit"
                            }, "Открыть")))));
}

var make = TargetAutocomplete;

export {
  make ,
  
}
/* react Not a pure module */