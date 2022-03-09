import * as React from "react";
import styled from "styled-components";
import { Post } from "../Post/Post";

export function PostList({ posts }) {
  return (
    <List>
      {posts.map((post) => (
        <li key={post.id}>
          <Post {...post} />
        </li>
      ))}
    </List>
  );
}

const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 60ch;
  list-style: none;
`;
