import React from "react";
import { useParams } from "react-router";

import { TimetableTable } from "./TimetableTable";

export const TimetablePage: React.FunctionComponent = () => {
  const { target } = useParams<{ target: string }>();
  return (
    <>
      <TimetableTable target={target} />
    </>
  );
};
