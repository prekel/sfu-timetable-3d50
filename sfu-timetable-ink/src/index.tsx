#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import meow from "meow";
import { App } from "./App";

const index = meow(`
	Usage
	  $ sfu-timetable-ink

	Options
		--name  Your name

	Examples
	  $ sfu-timetable-ink --name=Jane
	  Hello, Jane
`, {
  flags: {
    name: {
      type: "string",
      isRequired: true,
    },
  },
});

render(<App target={index.flags.name} />);
