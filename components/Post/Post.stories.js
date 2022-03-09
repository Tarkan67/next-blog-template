/* eslint-disable import/no-anonymous-default-export */
import * as React from "react";
import { Post } from "./Post";

export default {
  title: "Components/Post",
  component: Post,
};

const Template = (args) => <Post {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "example-1",
  title: "Blog Post Example #1",
  date: "2020-01-02",
};
