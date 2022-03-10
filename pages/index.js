import { PostList } from "../components/PostList/PostList";
import { getSortedPostsData } from "../lib/posts";

export default function Home(props) {
  return (
    <>
      <h1>My Blog</h1>
      <p>Lorem Ipsum…</p>
      <h2>Posts</h2>
      <a>
        <PostList posts={props.posts} />
      </a>
    </>
  );
}

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return {
    props: {
      posts: posts,
    },
  };
}
