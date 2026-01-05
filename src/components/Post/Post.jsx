import { useParams } from "react-router";
import useFetchPost from "../../helper/useFetchPosts";
import Comments from "../Comments/Comments";
import CommentForm from "../CommentForm/CommentForm";

export default function Post() {
  const { id } = useParams();
  const { posts, error, loading } = useFetchPost(id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="post-container">
      <h2>{posts.title}</h2>
      <p>{posts.content}</p>
      <CommentForm id={id} />
      <Comments id={id} />
    </div>
  );
}
