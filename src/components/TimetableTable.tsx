import React, { FC, useEffect, useState } from "react";
import { Alert, Container, Jumbotron, Spinner } from "react-bootstrap";

import { Timetable, WeekEnum } from "../Timetable";
import { QuickTargetToggle } from "./QuickTargetToggle";
import { TimetableCarousel } from "./TimetableCarousel";
import { TimetableColumns } from "./TimetableColumns";

export const TimetableTable: FC<{
  target: string;
  onQuickTargetToggle: (target: string, check: boolean) => void;
}> = ({ target, onQuickTargetToggle }) => {
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
    <QuickTargetToggle
      onQuickTargetToggle={(check) => onQuickTargetToggle(target, check)}
    />
  );

  if (error) {
    return (
      <Container>
        <Jumbotron>
          <h4>
            <Alert variant="danger">Ошибка: {error.message}</Alert>
          </h4>
          {toggler}
        </Jumbotron>
      </Container>
    );
  } else if (!timetable) {
    return (
      <Container>
        <Jumbotron>{spinner}</Jumbotron>
      </Container>
    );
  } else if (timetable.timetable.length === 0) {
    return (
      <Container>
        <Jumbotron>
          <h4>
            <Alert variant="warning">{timetable.target} не найдено</Alert>
          </h4>
          {toggler}
        </Jumbotron>
      </Container>
    );
  } else {
    return (
      <>
        <Container>
          <Jumbotron>
            {isLoaded ? (
              <>
                <h3>{timetable.target}</h3>
                {toggler}
              </>
            ) : (
              spinner
            )}
          </Jumbotron>
        </Container>

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
