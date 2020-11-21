import React, { FC, useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { Timetable } from "../Timetable";
import { TimetableCarousel } from "./TimetableCarousel";
import { TimetableColumns } from "./TimetableColumns";
import { TimetableJumbotron } from "./TimetableJumbotron";

export const TimetableTable: FC<{
  target: string;
  onQuickTargetChange: (target: string, check: boolean) => void;
}> = ({ target, onQuickTargetChange }) => {
  const [error, setError] = useState<Error | null>(null);
  const [timetable, setTimetable] = useState<Timetable | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(false);
    fetch(
      "https://edu.sfu-kras.ru/api/timetable/get&target=" +
        encodeURIComponent(target)
    )
      .then((res) => res.json())
      .then(
        (result: Timetable) => {
          setTimetable(result);
          setIsLoaded(true);
        },
        (error: Error) => {
          setError(error);
        }
      );
  }, [target]);

  return (
    <>
      <TimetableJumbotron
        error={error}
        timetable={timetable}
        isLoaded={isLoaded}
        onQuickTargetChange={onQuickTargetChange}
        target={target}
      />
      {!error && timetable && timetable.timetable.length !== 0 ? (
        <>
          <Container fluid>
            <TimetableCarousel timetable={timetable} />
          </Container>
          <Container>
            <TimetableColumns timetable={timetable} />
          </Container>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
