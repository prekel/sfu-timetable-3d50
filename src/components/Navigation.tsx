import React, { FC } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useRouteMatch } from "react-router-dom";

import { TargetForm } from "./TargetForm";
import { Basename } from "../App";

export const Navigation: FC = () => {
  const match = useRouteMatch<{ target: string }>("/:target");

  const groups = ["КИ18-16б", "КИ18-17/1б", "КИ18-17/2б"];

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
          {groups.map((group) => (
            <Nav.Item>
              <LinkContainer to={"/" + encodeURIComponent(group)}>
                <Nav.Link eventKey={group.toLowerCase()}>{group}</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          ))}
        </Nav>
        <TargetForm />
      </Navbar.Collapse>
    </Navbar>
  );
};
