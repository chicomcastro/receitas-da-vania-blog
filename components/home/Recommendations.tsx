import { FC } from "react";
import PostPreview from "../posts/PostPreview";

const Recommendations: FC<{ posts: any[] }> = ({ posts }) => {
  return (
    <div>
      <PostPreview type="horizontal" post={posts[0]} />
      <div className="row g-4">
        {posts.slice(1, posts.length).map(post => {
          return (
            <div className="col-12 col-md-6 col-lg-4" key={post.title}>
              <PostPreview post={post} />
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Recommendations;
