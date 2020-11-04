import React, { useEffect, useState } from "react";

import { Table } from "react-bootstrap";

interface Day {
  day: number;
  week: number;
  time: string;
  subject: string;
  type: string;
  teacher: string;
  place: string;
}

export const Timetable: React.FunctionComponent<{ target: string }> = ({
  target,
}) => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<Day[]>([]);

  useEffect(() => {
    fetch(
      "https://edu.sfu-kras.ru/api/timetable/get&target=" +
        encodeURIComponent(target)
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.timetable);
        },
        (error: Error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [target]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>День</th>
            <th>Неделя</th>
            <th>Время</th>
            <th>Предмет</th>
            <th>Преподаватель</th>
            <th>Тип</th>
            <th>Место</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.day + " " + item.week + " " + item.time}>
              <td>{item.day}</td>
              <td>{item.week}</td>
              <td>{item.time}</td>
              <td>{item.subject}</td>
              <td>{item.teacher}</td>
              <td>{item.type}</td>
              <td>{item.place}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
};
