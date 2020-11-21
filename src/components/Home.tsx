import React, { FC } from "react";

import { TargetForm } from "./TargetForm";
import { ContainerizedJumbotron } from "./ContainerizedJumbotron";

export const Home: FC = () => {
  return (
    <ContainerizedJumbotron>
      <h3>Введите группу или преподавателя: </h3>
      <TargetForm />
    </ContainerizedJumbotron>
  );
};
