import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

import { TargetForm } from "./TargetForm";

export const Home: React.FunctionComponent = () => {
  return (
    <Container>
      <Jumbotron>
        <h3>Введите группу или преподавателя: </h3>
        <TargetForm />
      </Jumbotron>
    </Container>
  );
};
