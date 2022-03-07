import { FC } from "react";
import PostPreview from "../posts/PostPreview";

const Recommendations: FC<{ posts: any[] }> = ({ posts }) => {
  const highlightedPost = posts.find(post => post.isHighlighted);
  const regularPosts = posts.filter(post => !post.highlightedPost);
  return (
    <div>
      {highlightedPost && <PostPreview type="horizontal" post={highlightedPost} />}
      <div className="row g-4">
        {regularPosts.map(post => {
          return (
            <div className="col-12 col-md-6 col-lg-4" key={post.title}>
              <PostPreview post={post} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recommendations;
