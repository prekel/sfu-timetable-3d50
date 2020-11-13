import React, { FC } from "react";
import { Card, ListGroup } from "react-bootstrap";

import { Timetable, DayOfWeekFromNumber, DayEnum, WeekEnum } from "../Timetable";
import { TimetableLesson } from "./TimetableLesson";

export const TimetableDay: FC<{
  day: DayEnum;
  week: WeekEnum;
  timetable: Timetable;
}> = ({ day, week, timetable }) => {
  const lessons = timetable.timetable
    .filter((lesson) => lesson.day === day && lesson.week === week)
    .map((lesson) => (
      <ListGroup.Item key={lesson.day + lesson.week + lesson.time}>
        <TimetableLesson lesson={lesson}></TimetableLesson>
      </ListGroup.Item>
    ));

  if (lessons.length === 0) {
    return <></>;
  } else {
    return (
      <Card className="mb-4">
        <Card.Header>
          {
            [DayOfWeekFromNumber(day)].map(
              (g) => g.charAt(0).toUpperCase() + g.slice(1)
            )[0]
          }
        </Card.Header>
        <ListGroup variant="flush">{lessons}</ListGroup>
      </Card>
    );
  }
};
