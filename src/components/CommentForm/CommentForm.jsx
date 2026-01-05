import { useState } from "react";
import { useOutletContext } from "react-router";

export default function CommentForm({id}) {
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:3000/comments/${id}`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({content:comment}),
    });
    setComment("")
  };

  return (
    <form onSubmit={handleSubmit}>
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
