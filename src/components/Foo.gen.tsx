/* TypeScript file generated from Foo.res by genType. */
/* eslint-disable import/first */


import * as React from 'react';

const $$toRE818596289: { [key: string]: any } = {"Red": 0, "Blue": 1};

// @ts-ignore: Implicit any on import
import * as FooBS__Es6Import from './Foo.bs';
const FooBS: any = FooBS__Es6Import;

// tslint:disable-next-line:interface-over-type-literal
export type color = "Red" | "Blue";

// tslint:disable-next-line:interface-over-type-literal
export type Props = { readonly color: color; readonly name: string };

export const make: React.ComponentType<{ readonly color: color; readonly name: string }> = function Foo(Arg1: any) {
  const $props = {color:$$toRE818596289[Arg1.color], name:Arg1.name};
  const result = React.createElement(FooBS.make, $props);
  return result
};
