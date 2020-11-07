import React from "react";
import { useParams } from "react-router";
import { TimetableTable } from "./TimetableTable";

export const TimetablePage: React.FunctionComponent = () => {
  const { target } = useParams<{ target: string }>();
  return (
    <>
      <h3>{decodeURIComponent(target)}</h3>
      <TimetableTable target={target} />
    </>
  );
};
