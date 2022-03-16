import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import { Post } from "../../clients/GoogleSheets";

interface Props {
  type?: "horizontal" | "normal" | "cover";
  post: Post;
}

const PostPreview: FC<Props> = ({ type = "normal", post }) => {
  let heights = {
    horizontal: "500",
    normal: "250",
    cover: "100%",
  };
  let widths = {
    horizontal: "1000",
    normal: "100%",
    cover: "100%",
  };
  return (
    <div className="card my-3" style={{ height: '100%' }}>
      {type === "horizontal" && (
        <div className="row g-0 flex-row-reverse">
          {post.imgSrc && (
            <div className="col-12 col-lg-6 d-flex">
              <Image
                src={post.imgSrc}
                height={heights[type]}
                width={widths[type]}
                alt={post.title}
              />
            </div>
          )}
          <div className={`col-12 col-lg-${post.imgSrc ? 6 : 12} d-flex`}>
            <Card post={post} />
          </div>
        </div>
      )}
      {type === "normal" && (
        <div className="card" style={{ height: '100%' }}>
          {post.imgSrc && <Image
            src={post.imgSrc}
            height={heights[type]}
            width={widths[type]}
            alt={post.title}
          />}
          <Card post={post} />
        </div>
      )
      }
    </div >
  );
};

const Card: FC<Props> = ({ post }) => {
  return (
    <div className="card-body p-4 d-flex flex-column justify-content-between">
      <h5 className="card-title">{post.title}</h5>
      {post.shortDescription && <div className="card-text text-muted" dangerouslySetInnerHTML={{
        __html: post.shortDescription
      }} />}
      <div className="d-flex justify-content-between align-items-center align-middle">
        <Link href={`/posts/${post.slug}`} passHref>
          <a className="text-dark fw-bold text-decoration-none">Ver mais</a>
        </Link>
      </div>
    </div>
  );
};

export default PostPreview;
