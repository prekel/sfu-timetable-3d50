import React, { FC } from "react";
import { Alert } from "react-bootstrap";

import { Timetable, WeekEnum, DayEnum } from "../Timetable";
import { TimetableDay } from "./TimetableDay";

export const TimetableWeek: FC<{ week: WeekEnum; timetable: Timetable }> = ({
  week,
  timetable,
}) => {
  return (
    <>
      <Alert variant={"secondary"}>
        {week === WeekEnum.Uneven ? "Нечётная неделя" : "Чётная неделя"}
      </Alert>
      {[
        DayEnum.Monday,
        DayEnum.Tuesday,
        DayEnum.Wednesday,
        DayEnum.Thursday,
        DayEnum.Friday,
        DayEnum.Saturday,
        DayEnum.Sunday,
      ].map((day) => (
        <React.Fragment key={day}>
          <TimetableDay
            day={day}
            week={week}
            timetable={timetable}
          ></TimetableDay>
        </React.Fragment>
      ))}
    </>
  );
};
