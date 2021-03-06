import React, { FC } from "react";
import { Card, ListGroup } from "react-bootstrap";

import {
  Timetable,
  DayOfWeekFromNumber,
  DayEnum,
  WeekEnum,
} from "../Timetable";
import { TimetableLesson } from "./TimetableLesson";

export const TimetableDay: FC<{
  day: DayEnum;
  week: WeekEnum;
  timetable: Timetable;
  date?: Date;
}> = ({ day, week, timetable, date }) => {
  const lessons = timetable.timetable
    .filter((lesson) => lesson.day === day && lesson.week === week)
    .map((lesson) => (
      <ListGroup.Item
        key={
          lesson.day +
          lesson.week +
          lesson.time +
          lesson.groups +
          lesson.teacher +
          lesson.type
        }
      >
        <TimetableLesson lesson={lesson} />
      </ListGroup.Item>
    ));

  const dateString = date
    ? " " +
      date.toLocaleString("ru-RU", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <Card className="mb-4">
      <Card.Header>
        {DayOfWeekFromNumber(day)} {dateString}
      </Card.Header>
      {lessons.length === 0 ? (
        <Card.Body>Нет занятий</Card.Body>
      ) : (
        <ListGroup variant="flush">{lessons}</ListGroup>
      )}
    </Card>
  );
};
