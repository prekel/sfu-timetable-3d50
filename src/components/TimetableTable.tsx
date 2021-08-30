import { FC, useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { TimetableCarousel } from "./TimetableCarousel";
import { TimetableColumns } from "./TimetableColumns";
import { TimetableJumbotron } from "./TimetableJumbotron";
import { Timetable_fetchExn, Timetable_t } from "../timetable/Timetable.gen"

export const TimetableTable: FC<{
  target: string;
  onQuickTargetChange: (target: string, check: boolean) => void;
}> = ({ target, onQuickTargetChange }) => {
  const [error, setError] = useState<Error | null>(null);
  const [timetable, setTimetable] = useState<Timetable_t | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(false);
    Timetable_fetchExn(target).then(
      (result) => {
        setTimetable(result);
        setIsLoaded(true);
        setError(null);
      },
      (error: Error) => {
        console.error(error);
        setError(error);
      });
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
