import { NextPage } from "next";
import { getPosts } from "../../clients/GoogleSheets";
import Layout from "../../components/Layout";

const Posts: NextPage = () => {
  return (
    <Layout>
      Posts
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map((post) => `/posts/${post.slug}`),
    fallback: true,
  }
}

export async function getStaticProps(context: any) {
  const posts = await getPosts();
  const id = context.params.id;
  return {
    props: {
      post: posts.find(post => post.slug === id),
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}

export default Posts;