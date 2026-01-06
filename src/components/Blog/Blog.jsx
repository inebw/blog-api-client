import { useNavigate } from "react-router";
import useFetchPost from "../../helper/useFetchPosts";

export default function Blog() {
  const { posts, loading, error } = useFetchPost();
  const navigate = useNavigate();

  if (loading) return (<div className="loader-container">Loading posts...<div className="blog-loader"></div></div>)

  if (error) return <p>{error.message}</p>;

  return (
    <div className="blog">
      <h1>Recent Posts</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <div className="post-content">
            <h2 onClick={() => navigate(`post/${post.id}`)}>{post.title}</h2>
            <p>{post.content.slice(0, 300) + "..."}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
