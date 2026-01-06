import { useParams } from "react-router";
import useFetchPost from "../../helper/useFetchPosts";
import Comments from "../Comments/Comments";
import CommentForm from "../CommentForm/CommentForm";
import para from "../../helper/Para";

export default function Post() {
  const { id } = useParams();
  const { posts, error, loading } = useFetchPost(id);

  if (loading) return (<div className="loader-container">Loading post...<div className="post-loader"></div></div>)
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <div className="post-container">
        <h1>{posts.title}</h1>
        <img src={posts.img} alt="" />
        {para(posts.content).map((p) => (
          <p>{p}</p>
        ))}
      </div>
      <div className="comments">
        <CommentForm id={id} />
        <Comments id={id} />
      </div>
    </>
  );
}
