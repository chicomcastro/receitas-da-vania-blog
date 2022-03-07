import { FC } from "react";
import PostPreview from "../posts/PostPreview";

const Recommendations: FC<{ posts: any[] }> = ({ posts }) => {
  return (
    <div>
      {/* <PostPreview type="horizontal" post={posts[0]} /> */}
      <div className="row g-4">
        {posts.map(post => {
          return (
            <div className="col-12 col-md-6 col-lg-4" key={post.title}>
              <PostPreview post={post} />
            </div>
          )
        })}
        {/* <div className="col-12 col-md-6 col-lg-4">
          <PostPreview post={posts[0]} />
        </div>
        <div className="col-12 col-md-12 col-lg-4">
          <PostPreview post={posts[0]} />
        </div> */}
      </div>
    </div>
  );
};

export default Recommendations;
