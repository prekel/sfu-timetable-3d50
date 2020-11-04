import React from "react";
import { useParams } from "react-router";
import { Timetable } from "./Timetable";

export const TimetablePage: React.FunctionComponent = () => {
  const { target } = useParams<{ target: string }>();
  return (
    <>
      <h3>{decodeURIComponent(target)}</h3>
      <Timetable target={target}/>
    </>
  );
};
