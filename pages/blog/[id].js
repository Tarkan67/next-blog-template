import Link from "next/link";
import { useRouter } from "next/router";
import { getPostData, getSortedPostsData } from "../../lib/posts";

export default function example1({ post }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(post);
  return (
    <>
      <p>Blogpost {id}</p>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }}></div>
      <Link href="/">
        <a> Back Home </a>
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
