import React, { FC } from "react";
import { Text, Box } from "ink";
import {
  Timetable,
  DayOfWeekFromNumber,
  DayEnum,
  WeekEnum,
} from "./Timetable";
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
      <Box flexDirection={"column"} padding={2}
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
      </Box>
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
    <Box flexDirection="column" padding={2}>
      <Box>
        <Text>{DayOfWeekFromNumber(day)} {dateString}</Text>
      </Box>
      {lessons.length === 0 ? (
        <Text>Нет занятий</Text>
      ) : (
        <Box>{lessons}</Box>
      )}
    </Box>
  );
};
