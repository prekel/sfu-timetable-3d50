import React, { useState } from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export const TargetForm: React.FunctionComponent = () => {
  const match = useRouteMatch<{ target: string }>("/:target");
  const [target, setTarget] = useState(match ? match?.params.target : "");
  const [currentTarget, setCurrentTarget] = useState(target);

  return (
    <>
      <Redirect push to={"/" + encodeURIComponent(currentTarget)} />
      <Form
        onSubmit={(event) => { 
          event.preventDefault();
          setCurrentTarget(target);
        }}
      >
        <Form.Group>
          <Form.Control
            placeholder="Группа/преподаватель"
            onChange={(event) => setTarget(event.target.value)}
          />
        </Form.Group>
        <Button type="submit">Открыть</Button>
      </Form>
    </>
  );
};
