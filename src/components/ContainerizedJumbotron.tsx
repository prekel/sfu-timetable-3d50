import React, { FC } from "react";
import { Container, Jumbotron } from "react-bootstrap";

export const ContainerizedJumbotron: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Container>
      <Jumbotron>{children}</Jumbotron>
    </Container>
  );
};
