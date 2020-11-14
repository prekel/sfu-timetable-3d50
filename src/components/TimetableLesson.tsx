import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import { Lesson } from "../Timetable";

export const TimetableLesson: FC<{ lesson: Lesson }> = ({ lesson }) => {
  return (
    <>
      <Row>
        <Col>
          <p>{lesson.time}</p>
        </Col>
        <Col>
          <p>{lesson.type}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{lesson.subject}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            {lesson.teacher ? (
              <Link to={"/" + encodeURIComponent(lesson.teacher)}>
                {lesson.teacher}
              </Link>
            ) : (
              lesson.groups?.map((group, idx, arr) => (
                <React.Fragment key={group}>
                  <Link to={"/" + encodeURIComponent(group)}>{group}</Link>
                  {idx !== arr.length - 1 ? <span>, </span> : <></>}
                </React.Fragment>
              ))
            )}
          </p>
        </Col>
        <Col>
          <p>{lesson.place}</p>
        </Col>
      </Row>
    </>
  );
};
