import { useState } from "react";
import { useOutletContext } from "react-router";

export default function CommentForm({id}) {
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`https://blog-api-xgmn.onrender.com/comments/${id}`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({content:comment}),
    });
    setComment("")
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <label htmlFor="comment">
        <input
          type="textarea"
          id="comment"
          name="comment"
          value={comment}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Add Comment</button>
    </form>
  );
}
