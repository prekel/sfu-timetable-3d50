// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Autocomplete from "../shared/autocomplete.bs.js";

function TargetAutocomplete(Props) {
  var onSubmit = Props.onSubmit;
  var match = React.useState(function () {
        return false;
      });
  var setDisplay = match[1];
  var match$1 = React.useState(function () {
        return "";
      });
  var setSearch = match$1[1];
  var search = match$1[0];
  var match$2 = React.useState(function () {
        return [];
      });
  var setOptions = match$2[1];
  var options = match$2[0];
  var updateOptions = function (pattern) {
    Autocomplete.$$fetch(pattern).then(function (options) {
          return Curry._1(setOptions, (function (param) {
                        return options;
                      }));
        });
    
  };
  React.useEffect((function () {
          updateOptions(search);
          console.log(options);
          
        }), [search]);
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
                                  placeholder: "Группа/преподаватель",
                                  onChange: (function ($$event) {
                                      var a = $$event.target.value;
                                      Curry._1(setSearch, (function (param) {
                                              return a;
                                            }));
                                      return Curry._1(setDisplay, (function (param) {
                                                    return true;
                                                  }));
                                    })
                                }))), React.createElement("div", {
                          className: "col"
                        }, React.createElement("button", {
                              className: "btn btn-primary",
                              type: "submit"
                            }, "Открыть")))), React.createElement("div", undefined, Belt_Array.map(options, (function (option) {
                        return React.createElement("span", undefined, option);
                      }))));
}

var make = TargetAutocomplete;

export {
  make ,
  
}
/* react Not a pure module */
