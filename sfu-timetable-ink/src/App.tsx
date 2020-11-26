import React, { FC, useState, useEffect } from "react";
import { Text, Box } from "ink";
import { Timetable, FetchTimetable } from "./Timetable";
import { TimetableDay } from "./TimetableDay";

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
      },
    );
  }, [target]);

  return (
    <>
      {!error && timetable && timetable.timetable.length !== 0 ? (
        <>
          <Box flexDirection="column" padding={2}>
            <Text color="green">{target}</Text>
            {timetable?.timetable.map((lesson) => (
              <React.Fragment key={lesson.day + lesson.time + lesson.week}>
                <TimetableDay day={lesson.day} timetable={timetable} week={lesson.week} />
              </React.Fragment>
            ))}
          </Box>
        </>
      ) : (
        <>{error?.message}</>
      )}
    </>
  );
};
