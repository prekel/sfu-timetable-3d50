import React from "react";
import { useParams } from "react-router";
import { MyComponent } from "./MyComponent";

export const Timetable: React.FunctionComponent = () => {
  const { target } = useParams<{ target: string }>();
  return (
    <>
      <h3>{decodeURIComponent(target)}</h3>
      <MyComponent />
    </>
  );
};
