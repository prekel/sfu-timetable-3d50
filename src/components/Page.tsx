import React from "react";
import { HashRouter } from "react-router-dom";
import { MainSwitch } from "./MainSwitch";
import { Container } from "react-bootstrap";

export const Page: React.FunctionComponent = () => {
  return (
    <HashRouter basename="/sfu-timetable-3d50">
      <Container>
        <MainSwitch />
      </Container>
    </HashRouter>
  );
};
