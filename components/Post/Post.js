import * as React from "react";
import styled from "styled-components";

export function Post({ id, title, date }) {
  return (
    <Container>
      <Title id={id}>{title}</Title>
      <time dateTime={date}>{date}</time>
    </Container>
  );
}

const Container = styled.article`
  padding: 1rem;
  border: 1px solid gray;
  border-radius: 8px;
`;

const Title = styled.h3`
  margin: 0;
`;
