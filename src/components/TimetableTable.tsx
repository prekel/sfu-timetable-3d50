import React, { useEffect, useState } from "react";

import { Table } from "react-bootstrap";

import { Timetable } from "../Timetable";

export const TimetableTable: React.FunctionComponent<{ target: string }> = ({
  target,
}) => {
  const [error, setError] = useState<Error | null>(null);
  const [timetable, setTimetable] = useState<Timetable | null>(null);

  useEffect(() => {
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
    return <div>Error: {error.message}</div>;
  } else if (!timetable) {
    return <div>Loading...</div>;
  } else {
    const tgh = timetable.type === "group" ? "Преподаватель" : "Группы";
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>День</th>
            <th>Неделя</th>
            <th>Время</th>
            <th>Предмет</th>
            <th>{tgh}</th>
            <th>Тип</th>
            <th>Место</th>
          </tr>
        </thead>
        <tbody>
          {timetable?.timetable.map((item) => {
            const tg = item.teacher ? item.teacher : item.groups?.join(", ");
            return (
              <tr key={item.day + item.week + item.time}>
                <td>{item.day}</td>
                <td>{item.week}</td>
                <td>{item.time}</td>
                <td>{item.subject}</td>
                <td>{tg}</td>
                <td>{item.type}</td>
                <td>{item.place}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
};
