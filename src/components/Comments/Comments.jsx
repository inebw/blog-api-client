import { useOutletContext } from "react-router";
import useFetchComments from "../../helper/useFetchComments";
import { format } from "date-fns";

export default function Comments({ id }) {
  const { comments, loading, error } = useFetchComments(id);
  const [user, setUser] = useOutletContext();

  if (loading)
    return (
      <div className="comments-loader-container">
        Loading comments...
        <div className="comments-loader"></div>
      </div>
    );
  if (error) return <p>{error.message}</p>;

  const deleteComment = async (comment_id) => {
    const response = await fetch(
      `https://blog-api-xgmn.onrender.com/comments/${comment_id}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );
  };

  return (
    <div className="comments-container">
      <h2>Recent Comments</h2>
      {comments &&
        comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <p>{comment.content}</p>
            <div className="comment-info">
              {comment.user ? (
                <p>
                  {comment.user.first_name} {comment.user.last_name}
                </p>
              ) : (
                <p>Anonymous</p>
              )}
              <p>{format(comment.created, "PPp")}</p>
              {user && user.id === comment.user_id && (
                <button onClick={() => deleteComment(comment.id)}>
                  Delete
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}
