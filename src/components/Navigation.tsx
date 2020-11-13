import React, { FC } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useRouteMatch } from "react-router-dom";

import { TargetForm } from "./TargetForm";
import { Basename } from "../App";

export const Navigation: FC = () => {
  const match = useRouteMatch<{ target: string }>("/:target");

  return (
    <Navbar bg="light" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand>{Basename.slice(1)}</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          activeKey={decodeURIComponent(
            match ? match.params.target : ""
          ).toLowerCase()}
          className="mr-auto"
        >
          <Nav.Item>
            <LinkContainer to={"/" + encodeURIComponent("КИ18-16б")}>
              <Nav.Link eventKey="ки18-16б">КИ18-16б</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to={"/" + encodeURIComponent("КИ18-17/1б")}>
              <Nav.Link eventKey="ки18-17/1б">КИ18-17/1б</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to={"/" + encodeURIComponent("КИ18-17/2б")}>
              <Nav.Link eventKey="ки18-17/2б">КИ18-17/2б</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
        <TargetForm />
      </Navbar.Collapse>
    </Navbar>
  );
};
