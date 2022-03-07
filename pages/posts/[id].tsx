import { NextPage } from "next";
import { getPosts } from "../../clients/GoogleSheets";
import Layout from "../../components/Layout";

const Posts: NextPage<{ post: any }> = ({ post }) => {
  return (
    <Layout>
      {post.videoUrl &&
        <div style={{ display: "flex", justifyContent: "center" }}>
          <iframe width="560" height="315" src={post.videoUrl} title={post.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>}
      <div className="mt-4 mb-2">
        {post.title}
      </div>
      {post.description && <div className="card-text text-muted" dangerouslySetInnerHTML={{
        __html: post.description
      }} />}
      <div className="mb-4">
        <a
          className="hover:shadow-lg hover:none"
          href={post.href}
          target="_blank" rel="noreferrer"
        >
          <span className="text-blue-600 hover:text-blue-400 hover:underline mt-4 block">
            Ver no Youtube →
          </span>
        </a>
      </div>
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