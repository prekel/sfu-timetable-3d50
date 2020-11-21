import React, { FC } from "react";
import { useParams } from "react-router";

import { TimetableTable } from "./TimetableTable";

export const TimetablePage: FC<{
  onQuickTargetChange: (target: string, check: boolean) => void;
}> = ({ onQuickTargetChange }) => {
  const { target } = useParams<{ target: string }>();
  return (
    <>
      <TimetableTable
        target={target}
        onQuickTargetChange={onQuickTargetChange}
      />
    </>
  );
};
