import React, { FC, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";

import { Timetable, DayEnumFromDayNumber, GetWeekNum } from "../Timetable";
import { TimetableDay } from "./TimetableDay";

export const TimetableCarousel: FC<{ timetable: Timetable }> = ({
  timetable,
}) => {
  const [index, setIndex] = useState(3);

  const today = new Date();
  const days = Array.from({ length: 20 }, (x, i) => i)
    .map((elem) => elem - 3)
    .map((daydiff) => {
      let date1 = new Date();
      date1.setDate(today.getDate() + daydiff);
      return date1;
    })
    .filter((date) => date.getDay() !== 0);

  const previous = days[index - 1];
  const current = days[index];
  const next = days[index + 1];

  return (
    <>
      <Row>
        <Col xs={1}>
          <Button
            className="timetable-carousel-btn"
            variant="light"
            onClick={() => setIndex(index - 1)}
            disabled={index === 1}
          >
            {"<<"}
          </Button>
        </Col>
        <Col>
          <TimetableDay
            day={DayEnumFromDayNumber(previous.getDay())}
            week={GetWeekNum(previous)}
            timetable={timetable}
            date={previous}
          ></TimetableDay>
        </Col>
        <Col>
          <TimetableDay
            day={DayEnumFromDayNumber(current.getDay())}
            week={GetWeekNum(current)}
            timetable={timetable}
            date={current}
          ></TimetableDay>
        </Col>
        <Col>
          <TimetableDay
            day={DayEnumFromDayNumber(next.getDay())}
            week={GetWeekNum(next)}
            timetable={timetable}
            date={next}
          ></TimetableDay>
        </Col>
        <Col xs={1}>
          <Button
            className="timetable-carousel-btn"
            variant="light"
            onClick={() => setIndex(index + 1)}
            disabled={index === days.length - 2}
          >
            {">>"}
          </Button>
        </Col>
      </Row>
    </>
  );
};
