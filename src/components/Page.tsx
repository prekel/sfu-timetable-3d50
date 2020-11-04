import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MainSwitch } from "./MainSwitch";
import { Container } from "react-bootstrap";

export const Page: React.FunctionComponent = () => {
  return (
    <Router>
      <Container>
        <MainSwitch />
      </Container>
    </Router>
  );
};
