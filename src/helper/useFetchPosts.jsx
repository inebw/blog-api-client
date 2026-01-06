import { useEffect, useState } from "react";

export default function useFetchPost(id = null) {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://blog-api-xgmn.onrender.com/posts/${id ? id : ""}`);
        if (!response.ok) throw new Error("Server Error");

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { posts, loading, error };
}
