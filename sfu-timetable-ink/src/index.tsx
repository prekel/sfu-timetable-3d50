#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import {App} from './App';

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
      type: 'string'
    }
  }
});

render(<App name={index.flags.name}/>);
