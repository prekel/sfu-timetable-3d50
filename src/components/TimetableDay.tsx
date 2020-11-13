import React, { FC } from "react";

import { Card, ListGroup } from "react-bootstrap";

import { Timetable, DayOfWeekFromNumber } from "../Timetable";
import { TimetableLesson } from "./TimetableLesson";

export const TimetableDay: FC<{
  day: string;
  week: string;
  timetable: Timetable;
}> = ({ day, week, timetable }) => {
  return (
    <Card className="mb-4">
      <Card.Header>
        {
          [DayOfWeekFromNumber(parseInt(day))].map(
            (g) => g.charAt(0).toUpperCase() + g.slice(1)
          )[0]
        }
      </Card.Header>
      <ListGroup variant="flush">
        {timetable.timetable
          .filter((lesson) => lesson.day === day && lesson.week === week)
          .map((lesson) => (
            <ListGroup.Item key={lesson.day + lesson.week + lesson.time}>
              <TimetableLesson lesson={lesson}></TimetableLesson>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </Card>
  );
};
