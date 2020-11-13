import React, { useEffect, useState, FC } from "react";
import { Alert, Col, Jumbotron, Row, Spinner } from "react-bootstrap";

import { Timetable, WeekEnum } from "../Timetable";
import { TimetableWeek } from "./TimetableWeek";

export const TimetableTable: FC<{ target: string }> = ({ target }) => {
  const [error, setError] = useState<Error | null>(null);
  const [timetable, setTimetable] = useState<Timetable | null>(null);

  useEffect(() => {
    setTimetable(null);
    fetch(
      "https://edu.sfu-kras.ru/api/timetable/get&target=" +
        encodeURIComponent(target)
    )
      .then((res) => res.json())
      .then(
        (result: Timetable) => {
          setTimetable(result);
        },
        (error: Error) => {
          setError(error);
        }
      );
  }, [target]);

  if (error) {
    return <Alert variant="danger">Ошибка: {error.message}</Alert>;
  } else if (!timetable) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Загрузка...</span>
      </Spinner>
    );
  } else if (timetable.timetable.length === 0) {
    return (
      <Jumbotron>
        <h3>
          <Alert variant="warning">{timetable.target} не найдено</Alert>
        </h3>
      </Jumbotron>
    );
  } else {
    return (
      <>
        <Jumbotron>
          <h3>{timetable.target}</h3>
        </Jumbotron>
        <Row>
          <Col>
            <TimetableWeek week={WeekEnum.Uneven} timetable={timetable} />
          </Col>
          <Col>
            <TimetableWeek week={WeekEnum.Even} timetable={timetable} />
          </Col>
        </Row>
      </>
    );
  }
};
