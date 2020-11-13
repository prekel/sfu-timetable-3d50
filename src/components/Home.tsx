import React from "react";
import { Jumbotron } from "react-bootstrap";

import { TargetForm } from "./TargetForm";

export const Home: React.FunctionComponent = () => {
  return (
    <Jumbotron>
      <h3>Введите группу или преподавателя: </h3>
      <TargetForm />
    </Jumbotron>
  );
};
