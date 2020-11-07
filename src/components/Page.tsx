import React, { useState } from "react";
import { HashRouter, BrowserRouter, Redirect } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { createBrowserHistory } from "history";
import { MainSwitch } from "./MainSwitch";

const history = createBrowserHistory();
const basename = "/sfu-timetable-3d50";

export const Page: React.FunctionComponent = () => {
  return (
    <BrowserRouter basename={basename}>
      <>
        <Redirect to={"/"} />
        <HashRouter>
          <>
            <Container>
              <TargetForm />
              <MainSwitch />
            </Container>
          </>
        </HashRouter>
      </>
    </BrowserRouter>
  );
};

const TargetForm: React.FunctionComponent = () => {
  const [target, setTarget] = useState(history.location.hash.substr(2));
  const [currentTarget, setCurrentTarget] = useState(target);
  console.log(target);

  return (
    <>
      <Redirect to={"/" + encodeURIComponent(currentTarget)} />
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          setCurrentTarget(target);
          history.push(basename + "/#/" + encodeURIComponent(target));
        }}
      >
        <Form.Group>
          <Form.Control
            placeholder="Группа/преподаватель"
            onChange={(event) => setTarget(event.target.value)}
          />
        </Form.Group>
        <Button
          onClick={() => {
            setCurrentTarget(target);
            history.push(basename + "/#/" + encodeURIComponent(target));
          }}
        >
          Открыть
        </Button>
      </Form>
    </>
  );
};
