import React, { FC } from "react";
import { Text } from "ink";

export const App: FC<{ name?: string }> = ({ name = "Stranger1" }) => (
  <Text>
    Hello, <Text color="green">{name}</Text>
  </Text>
);
