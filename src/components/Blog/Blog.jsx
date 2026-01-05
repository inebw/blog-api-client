import { useNavigate } from "react-router";
import useFetchPost from "../../helper/useFetchPosts";

export default function Blog() {
  const { posts, loading, error } = useFetchPost();
  const navigate = useNavigate()

  if (loading) return <p>Loading....</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <h2>Recent Posts</h2>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <h3 onClick={() => navigate(`post/${post.id}`)}>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </>
  );
}
