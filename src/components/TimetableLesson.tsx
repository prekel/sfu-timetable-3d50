import React, { FC } from "react";
import { Link } from "react-router-dom";

import { Lesson } from "../Timetable";

export const TimetableLesson: FC<{ lesson: Lesson }> = ({ lesson }) => {
  return (
    <>
      <p>{lesson.time}</p>
      <p>{lesson.subject}</p>
      <p>
        {lesson.teacher ? (
          <Link to={"/" + encodeURIComponent(lesson.teacher)}>
            {lesson.teacher}
          </Link>
        ) : (
          lesson.groups?.map((group, idx, arr) => (
            <React.Fragment key={group}>
              <Link to={"/" + encodeURIComponent(group)}>{group}</Link>
              {idx !== arr.length - 1 ? <span>, </span> : <></>}
            </React.Fragment>
          ))
        )}
      </p>
      <p>{lesson.type}</p>
      <p>{lesson.place}</p>
    </>
  );
};
