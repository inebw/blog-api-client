import useFetchPost from "./useFetchPosts";

export default function Blog() {
  const { posts, loading, error } = useFetchPost();

  if (loading) return <p>Loading....</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <h2>Recent Posts</h2>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </>
  );
}
