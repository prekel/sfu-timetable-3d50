import React, { FC } from "react";
import { Timetable } from "../Timetable";

import { Col } from "react-bootstrap";

import { TimetableDay } from "./TimetableDay";

export const TimetableWeek: FC<{ week: string; timetable: Timetable }> = ({
  week,
  timetable,
}) => {
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((day) => (
        <React.Fragment key={day}>
          <TimetableDay
            day={day.toString()}
            week={week}
            timetable={timetable}
          ></TimetableDay>
        </React.Fragment>
      ))}
    </>
  );
};
