import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MainSwitch } from "./MainSwitch";
import { Container } from "react-bootstrap";

export const Page: React.FunctionComponent = () => {
  return (
    <Router basename="/sfu-timetable-3d50">
      <Container>
        <MainSwitch />
      </Container>
    </Router>
  );
};
