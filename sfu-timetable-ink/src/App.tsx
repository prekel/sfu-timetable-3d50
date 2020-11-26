import React, { FC, useState, useEffect } from "react";
import { Text } from "ink";
import { Timetable, FetchTimetable } from "./Timetable";

export const App: FC<{ target: string }> = ({ target }) => {
  const [timetable, setTimetable] = useState<Timetable | null>();
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    FetchTimetable(target).then(
      (result: Timetable) => {
        setTimetable(result);
      },
      (error: Error) => {
        setError(error);
      });
  }, [target]);

  return (
    <>
      {!error && timetable && timetable.timetable.length !== 0 ? (
        <>
          <Text>
            <Text color="green">{target}</Text>
            {timetable?.timetable.map(lesson => <Text
              key={lesson.day + lesson.time + lesson.week}>{lesson.subject}</Text>)}
          </Text>
        </>
      ) : (
        <>{error?.message}</>
      )}
    </>
  );
};
