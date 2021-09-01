import { FC } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { QuickTargetChanger } from "./QuickTargetChanger";
import { ContainerizedJumbotron } from "./ContainerizedJumbotron";
import { Timetable_t } from "../shared/Timetable.gen"

export const TimetableJumbotron: FC<{
  error: Error | null;
  timetable: Timetable_t | null;
  isLoaded: boolean;
  onQuickTargetChange: (target: string, check: boolean) => void;
  target: string;
}> = ({ error, timetable, isLoaded, onQuickTargetChange, target }) => {
  const spinner = (
    <Spinner animation="border" role="status">
      <span className="sr-only">Загрузка...</span>
    </Spinner>
  );

  const changer = (
    <QuickTargetChanger
      onQuickTargetChange={(check) => onQuickTargetChange(target, check)}
    />
  );

  if (error) {
    return (
      <ContainerizedJumbotron>
        <h4>
          <Alert variant="danger">Ошибка: {error.message}</Alert>
        </h4>
        {changer}
      </ContainerizedJumbotron>
    );
  } else if (!timetable) {
    return <ContainerizedJumbotron>{spinner}</ContainerizedJumbotron>;
  } else if (timetable.timetable.length === 0) {
    return (
      <ContainerizedJumbotron>
        <h4>
          <Alert variant="warning">{timetable.target} не найдено</Alert>
        </h4>
        {changer}
      </ContainerizedJumbotron>
    );
  } else {
    return (
      <ContainerizedJumbotron>
        {isLoaded ? (
          <>
            <h3>{timetable.target}</h3>
            {changer}
          </>
        ) : (
          spinner
        )}
      </ContainerizedJumbotron>
    );
  }
};
