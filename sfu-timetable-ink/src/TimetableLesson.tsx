import React, { FC } from "react";
import { Text, Box } from "ink";
import { Lesson } from "./Timetable";

export const TimetableLesson: FC<{ lesson: Lesson }> = ({ lesson }) => {
  return (
    <Box>
      <Text>{lesson.time}</Text>
    </Box>
  );
};
