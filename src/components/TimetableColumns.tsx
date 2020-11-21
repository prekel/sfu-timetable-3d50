import React, { FC } from "react";
import { Alert, Col, Row } from "react-bootstrap";

import { DayEnum, Timetable, WeekEnum } from "../Timetable";
import { TimetableDay } from "./TimetableDay";

export const TimetableColumns: FC<{ timetable: Timetable }> = ({
  timetable,
}) => {
  return (
    <>
      <Row>
        <Col>
          <Alert variant={"secondary"}>Нечётная неделя</Alert>
        </Col>
        <Col>
          <Alert variant={"secondary"}>Чётная неделя</Alert>
        </Col>
      </Row>
      {[
        DayEnum.Monday,
        DayEnum.Tuesday,
        DayEnum.Wednesday,
        DayEnum.Thursday,
        DayEnum.Friday,
        DayEnum.Saturday,
        DayEnum.Sunday,
      ].map((day) => (
        <Row key={day}>
          <Col xs={6}>
            <TimetableDay
              day={day}
              week={WeekEnum.Uneven}
              timetable={timetable}
            />
          </Col>
          <Col xs={6}>
            <TimetableDay
              day={day}
              week={WeekEnum.Even}
              timetable={timetable}
            />
          </Col>
        </Row>
      ))}
    </>
  );
};
