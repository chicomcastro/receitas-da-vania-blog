import Link from "next/link";
import { FC } from "react";
import PostPreview from "../posts/PostPreview";

const Recommendations: FC<{ posts: any[] }> = ({ posts }) => {
  const highlightedPost = posts.find((post) => post.isHighlighted);
  const regularPosts = posts.filter((post) => !post.isHighlighted).slice(0, 6);
  return (
    <div>
      {highlightedPost && (
        <PostPreview type="horizontal" post={highlightedPost} />
      )}
      <div className="row g-4 mb-4">
        {regularPosts.map((post) => {
          return (
            <div className="col-12 col-md-6 col-lg-4" key={post.title}>
              <PostPreview post={post} />
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-center align-items-center align-middle pt-4">
        <Link href={`/posts`} passHref>
          <a
            className="fw-bold text-decoration-none"
            style={{ color: "#ff6863", fontSize: 22 }}
          >
            Ver todas as receitas
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Recommendations;
