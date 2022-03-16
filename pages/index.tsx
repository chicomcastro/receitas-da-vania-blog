import type { NextPage } from "next";
import { getPosts, Post } from "../clients/GoogleSheets";
import Header from "../components/home/Header";
import Recommendations from "../components/home/Recommendations";
import Layout from "../components/Layout";

const Home: NextPage<{ recommendedPosts: Post[] }> = ({ recommendedPosts = [] }) => {
  return (
    <Layout>
      <Header />
      <Recommendations posts={recommendedPosts} />
      <div style={{ marginBottom: 40 }} />
    </Layout>
  );
};

export async function getStaticProps(context: any) {
  const posts = await getPosts();
  return {
    props: {
      recommendedPosts: posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 60, // In seconds
  };
}


export default Home;
