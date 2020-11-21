import React, { FC, useEffect, useState } from "react";
import { Alert, Container, Spinner } from "react-bootstrap";

import { Timetable } from "../Timetable";
import { QuickTargetChanger } from "./QuickTargetChanger";
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

  const spinner = (
    <Spinner animation="border" role="status">
      <span className="sr-only">Загрузка...</span>
    </Spinner>
  );

  const toggler = (
    <QuickTargetChanger
      onQuickTargetChange={(check) => onQuickTargetChange(target, check)}
    />
  );

  if (error) {
    return (
      <TimetableJumbotron>
        <h4>
          <Alert variant="danger">Ошибка: {error.message}</Alert>
        </h4>
        {toggler}
      </TimetableJumbotron>
    );
  } else if (!timetable) {
    return <TimetableJumbotron>{spinner}</TimetableJumbotron>;
  } else if (timetable.timetable.length === 0) {
    return (
      <TimetableJumbotron>
        <h4>
          <Alert variant="warning">{timetable.target} не найдено</Alert>
        </h4>
        {toggler}
      </TimetableJumbotron>
    );
  } else {
    return (
      <>
        <TimetableJumbotron>
          {isLoaded ? (
            <>
              <h3>{timetable.target}</h3>
              {toggler}
            </>
          ) : (
            spinner
          )}
        </TimetableJumbotron>

        <Container fluid>
          <TimetableCarousel timetable={timetable} />
        </Container>

        <Container>
          <TimetableColumns timetable={timetable} />
        </Container>
      </>
    );
  }
};
