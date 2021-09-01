import { FC } from "react";
import { Alert, Col, Row } from "react-bootstrap";

import { TimetableDay } from "./TimetableDay";
import { Timetable_t, Day_all } from "../shared/Timetable.gen"

export const TimetableColumns: FC<{ timetable: Timetable_t }> = ({
  timetable,
}) => {
  return (
    <>
      <Row>
        <Col>
          <Alert variant="secondary">Нечётная неделя</Alert>
        </Col>
        <Col>
          <Alert variant="secondary">Чётная неделя</Alert>
        </Col>
      </Row>
      {Day_all.map((day) => (
        <Row key={day}>
          <Col xs={6}>
            <TimetableDay
              day={day}
              week={"Uneven"}
              timetable={timetable}
            />
          </Col>
          <Col xs={6}>
            <TimetableDay
              day={day}
              week={"Even"}
              timetable={timetable}
            />
          </Col>
        </Row>
      ))}
    </>
  );
};
