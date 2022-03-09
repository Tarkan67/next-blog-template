/* eslint-disable import/no-anonymous-default-export */
import * as React from "react";
import { PostList } from "./PostList";

const examplePosts = [
  {
    id: "example-1",
    title: "Blog Post Example #1",
    date: "2020-01-02",
  },
  {
    id: "example-2",
    title: "Blog Post Example #2",
    date: "2020-01-02",
  },
  {
    id: "example-3",
    title: "Blog Post Example #3",
    date: "2020-01-02",
  },
];

export default {
  title: "Components/PostList",
  component: PostList,
};

const Template = (args) => <PostList {...args} />;

export const Default = Template.bind({});
Default.args = {
  posts: examplePosts,
};
