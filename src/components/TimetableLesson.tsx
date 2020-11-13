import React, { FC } from "react";

import { Lesson } from "../Timetable";

export const TimetableLesson: FC<{ lesson: Lesson }> = ({ lesson }) => {
  return (
    <>
      <p>{lesson.time}</p>
      <p>{lesson.subject}</p>
      <p>{lesson.teacher ? lesson.teacher : lesson.groups?.join(", ")}</p>
      <p>{lesson.place}</p>
    </>
  );
};
