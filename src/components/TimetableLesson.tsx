import React, { FC } from "react";
import { Link } from "react-router-dom";

import { Lesson } from "../Timetable";

export const TimetableLesson: FC<{ lesson: Lesson }> = ({ lesson }) => {
  return (
    <>
      <p>{lesson.time}</p>
      <p>{lesson.subject}</p>
      {lesson.teacher ? (
        <Link to={"/" + encodeURIComponent(lesson.teacher)}>
          {lesson.teacher}
        </Link>
      ) : (
        lesson.groups?.map((group, idx, arr) => (
          <>
            <Link to={"/" + encodeURIComponent(group)}>{group}</Link>
            {idx !== arr.length - 1 ? <span>, </span> : <></>}
          </>
        ))
      )}
      <p>{lesson.place}</p>
    </>
  );
};
