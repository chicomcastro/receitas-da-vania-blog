import { NextPage } from "next";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { getPosts, Post } from "../../clients/GoogleSheets";
import Layout from "../../components/Layout";
import PostPreview from "../../components/posts/PostPreview";

const Posts: NextPage<{ posts: Post[] }> = ({ posts }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearch = () => {
    if (searchText) {
      setFilteredPosts(posts.filter(post => {
        return (
          post.title.toLowerCase().includes(searchText.toLowerCase()) ||
          post.shortDescription.toLowerCase().includes(searchText.toLowerCase()) ||
          post.description.toLowerCase().includes(searchText.toLowerCase()) ||
          post.videoUrl.toLowerCase().includes(searchText.toLowerCase())
        );
      }));
    }
    else {
      setFilteredPosts(posts);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchText]);

  return (
    <Layout>
      <div className="pt-3">
        <div className="input-group" >
          <div className="form-outline d-flex flex-fill">
            <input type="search" value={searchText} onBlur={handleSearch} onChange={(e) => setSearchText(e.target.value)} className="form-control" />
            <label className="form-label" htmlFor="form1"></label>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSearch}
            style={{
              backgroundColor: "#f69b98",
              borderColor: "#f69b98",
              zIndex: 0
            }}
          >
            <AiOutlineSearch></AiOutlineSearch>
          </button>
        </div>
      </div>
      <div className="pb-4">
        <div className="row g-4 pb-4">
          {filteredPosts?.map(post => {
            return (
              <div className="col-12 col-md-6 col-lg-4" key={post.title}>
                <PostPreview post={post} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context: any) {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 60, // In seconds
  };
}

export default Posts;