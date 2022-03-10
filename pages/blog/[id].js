import Link from "next/link";
import { getPostData, getSortedPostsData } from "../../lib/posts";

export default function BlogPost({ post }) {
  return (
    <>
      <h1>{post.title}</h1>
      <time dateTime={post.date}>{post.date}</time>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }}></div>
      <Link href="/">
        <a>← Back Home </a>
      </Link>
    </>
  );
}

export async function getStaticPaths() {
  const posts = getSortedPostsData();
  return {
    paths: posts.map((post) => ({ params: { id: post.id } })),
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const post = await getPostData(id);
  return {
    props: {
      post: post,
    },
  };
}
