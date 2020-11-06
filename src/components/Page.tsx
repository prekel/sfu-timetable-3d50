import React, { useState } from "react";
import { HashRouter, BrowserRouter, Redirect } from "react-router-dom";
import { MainSwitch } from "./MainSwitch";
import { Container, Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const Page: React.FunctionComponent = () => {
  const [target, setTarget] = useState("КИ18-16б");
  const [currentTarget, setCurrentTarget] = useState(target);

  return (
    <BrowserRouter basename="/sfu-timetable-3d50">
      <HashRouter>
        <Redirect push to={"/" + currentTarget}/>
        <Container>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              setCurrentTarget(encodeURIComponent(target));
            }}
          >
            <Form.Group>
              <Form.Control
                placeholder="Группа/преподаватель"
                onChange={(event) => setTarget(event.target.value)}
              />
            </Form.Group>
            <LinkContainer to={"/" + currentTarget}>
              <Button
                onClick={() => setCurrentTarget(encodeURIComponent(target))}
              >
                Открыть
              </Button>
            </LinkContainer>
          </Form>
          <MainSwitch />
        </Container>
      </HashRouter>
    </BrowserRouter>
  );
};
