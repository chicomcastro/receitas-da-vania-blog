import type { NextPage } from "next";
import { getPosts } from "../clients/GoogleSheets";
import Header from "../components/home/Header";
import Recommendations from "../components/home/Recommendations";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage<{ recommendedPosts: any[] }> = ({ recommendedPosts = [] }) => {
  return (
    <Layout>
      <Header />
      <Recommendations posts={recommendedPosts} />
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
    revalidate: 1, // In seconds
  };
}


export default Home;
