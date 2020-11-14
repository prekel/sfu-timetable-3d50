import React, { useState, useEffect } from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";

export const TargetForm: React.FunctionComponent = () => {
  const match = useRouteMatch<{ target: string }>("/:target");
  const [target, setTarget] = useState(match ? match?.params.target : "");
  const [currentTarget, setCurrentTarget] = useState(target);
  const [isNeedRedirect, setIsNeedRedirect] = useState(false);

  useEffect(() => {
    setIsNeedRedirect(false);
    return () => {};
  }, [match]);

  return (
    <>
      {isNeedRedirect ? (
        <Redirect push to={"/" + encodeURIComponent(currentTarget)} />
      ) : (
        <></>
      )}
      <Form
        inline
        onSubmit={(event) => {
          event.preventDefault();
          setIsNeedRedirect(true);
          setCurrentTarget(target);
        }}
      >
        <Row>
          <Col>
            <Form.Group>
              <Form.Control
                className="mr-sm-2"
                placeholder="Группа/преподаватель"
                onChange={(event) => setTarget(event.target.value)}
              />
            </Form.Group>
          </Col>  
          <Col>
            <Button type="submit">Открыть</Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
