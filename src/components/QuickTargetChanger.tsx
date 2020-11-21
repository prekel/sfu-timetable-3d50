import React, { FC } from "react";
import { Button } from "react-bootstrap";

export const QuickTargetChanger: FC<{
  onQuickTargetChange: (check: boolean) => void;
}> = ({ onQuickTargetChange }) => {
  return (
    <>
      <Button
        onClick={() => {
          onQuickTargetChange(true);
        }}
      >
        +
      </Button>
      <Button
        onClick={() => {
          onQuickTargetChange(false);
        }}
      >
        -
      </Button>
    </>
  );
};
