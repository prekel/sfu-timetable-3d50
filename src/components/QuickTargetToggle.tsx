import React, { FC } from "react";
import { Button } from "react-bootstrap";

export const QuickTargetToggle: FC<{
  onQuickTargetToggle: (check: boolean) => void;
}> = ({ onQuickTargetToggle }) => {
  return (
    <>
      <Button
        onClick={() => {
          onQuickTargetToggle(true);
        }}
      >
        +
      </Button>
      <Button
        onClick={() => {
          onQuickTargetToggle(false);
        }}
      >
        -
      </Button>
    </>
  );
};
