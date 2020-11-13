import React, { useEffect, useState } from "react";

import { Col, Row } from "react-bootstrap";

import { Timetable } from "../Timetable";

import { TimetableWeek } from "./TimetableWeek";

export const TimetableTable: React.FunctionComponent<{ target: string }> = ({
  target,
}) => {
  const [error, setError] = useState<Error | null>(null);
  const [timetable, setTimetable] = useState<Timetable | null>(null);

  useEffect(() => {
    fetch(
      "https://edu.sfu-kras.ru/api/timetable/get&target=" +
        encodeURIComponent(target)
    )
      .then((res) => res.json())
      .then(
        (result: Timetable) => {
          setTimetable(result);
        },
        (error: Error) => {
          setError(error);
        }
      );
  }, [target]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!timetable) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Row>
          <Col>
            <TimetableWeek week="1" timetable={timetable} />
          </Col>
          <Col>
            <TimetableWeek week="2" timetable={timetable} />
          </Col>
        </Row>
      </>
    );
  }
};
