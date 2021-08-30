import { FC } from "react";
import { Card, ListGroup } from "react-bootstrap";

import { TimetableLesson } from "./TimetableLesson";
import { Timetable_t, Day_t, Week_t, Day_toRu } from "../timetable/Timetable.gen"

export const TimetableDay: FC<{
  day: Day_t;
  week: Week_t;
  timetable: Timetable_t;
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
          lesson.type_
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
        {Day_toRu(day)} {dateString}
      </Card.Header>
      {lessons.length === 0 ? (
        <Card.Body>Нет занятий</Card.Body>
      ) : (
        <ListGroup variant="flush">{lessons}</ListGroup>
      )}
    </Card>
  );
};
