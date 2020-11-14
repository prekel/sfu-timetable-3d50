import React, { FC } from "react";
import { Carousel, Row, Col } from "react-bootstrap";

import { Timetable, DayEnumFromDayNumber, GetWeekNum } from "../Timetable";
import { TimetableDay } from "./TimetableDay";

export const TimetableCarousel: FC<{ timetable: Timetable }> = ({
  timetable,
}) => {
  const today = new Date();
  const days = Array.from({ length: 20 }, (x, i) => i)
    .map((elem) => elem - 3)
    .map((daydiff) => {
      let date1 = new Date();
      date1.setDate(today.getDate() + daydiff);
      let date2 = new Date();
      date2.setDate(today.getDate() + daydiff - 1);
      let date3 = new Date();
      date3.setDate(today.getDate() + daydiff - 2);
      return { date1, date2, date3 };
    });

  return (
    <Carousel fade>
      {days.map(({ date1, date2, date3 }) => (
        <Carousel.Item key={date2.toDateString()}>
          <Row>
            <Col>
              <TimetableDay
                day={DayEnumFromDayNumber(date3.getDay())}
                week={GetWeekNum(date3)}
                timetable={timetable}
              ></TimetableDay>
            </Col>
            <Col>
              <TimetableDay
                day={DayEnumFromDayNumber(date2.getDay())}
                week={GetWeekNum(date2)}
                timetable={timetable}
              ></TimetableDay>
            </Col>
            <Col>
              <TimetableDay
                day={DayEnumFromDayNumber(date1.getDay())}
                week={GetWeekNum(date1)}
                timetable={timetable}
              ></TimetableDay>
            </Col>
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
