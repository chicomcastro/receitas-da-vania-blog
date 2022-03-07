import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
import Posts from "../../pages/posts";

interface Props {
  type?: "horizontal" | "normal" | "cover";
  post: {
    title: string;
    description?: string;
    date: string;
    image: string;
    slug: string;
  };
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
    <div className="card my-3">
      {type === "horizontal" && (
        <div className="row g-0 flex-row-reverse">
          <div className="col-12 col-lg-6 d-flex">
            {post.image && <Image
              src={post.image}
              height={heights[type]}
              width={widths[type]}
              alt={post.title}
            />}
          </div>
          <div className="col-12 col-lg-6 d-flex">
            <Card post={post} />
          </div>
        </div>
      )}
      {type === "normal" && (
        <div className="card">
          {post.image && <Image
            src={post.image}
            height={heights[type]}
            width={widths[type]}
            alt={post.title}
          />}
          <Card post={post} />
        </div>
      )}
    </div>
  );
};

const Card: FC<Props> = ({ post }) => {
  const maxDescriptionLength = 150;
  return (
    <div className="card-body p-4 d-flex flex-column justify-content-between">
      <h5 className="card-title">{post.title}</h5>
      {post.description && <div className="card-text text-muted" dangerouslySetInnerHTML={{
        __html: (post.description?.slice(0, maxDescriptionLength) || "") +
          (post.description && post.description?.length > maxDescriptionLength ? "..." : "")
      }} />}
      <div className="d-flex justify-content-between align-items-center align-middle">
        <p className="card-text my-auto">
          <small className="text-muted">{post.date}</small>
        </p>
        <Link href={`/posts/${post.slug}`} passHref>
          <a className="text-dark fw-bold text-decoration-none">Read more</a>
        </Link>
      </div>
    </div>
  );
};

export default PostPreview;
