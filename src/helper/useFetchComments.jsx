import { useEffect, useState } from "react";

export default function useFetchComments(id) {
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://blog-api-xgmn.onrender.com/comments/${id}`);
        if (!response.ok) throw new Error("Server Error");
        const data = await response.json();
        setComments(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [comments]);
  return { comments, loading, error };
}
