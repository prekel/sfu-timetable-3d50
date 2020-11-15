import React, { FC } from "react";
import { useParams } from "react-router";

import { TimetableTable } from "./TimetableTable";

export const TimetablePage: FC<{
  onQuickTargetToggle: (target: string, check: boolean) => void;
}> = ({ onQuickTargetToggle }) => {
  const { target } = useParams<{ target: string }>();
  return (
    <>
      <TimetableTable
        target={target}
        onQuickTargetToggle={onQuickTargetToggle}
      />
    </>
  );
};
