import { useCallback, useEffect, useState } from "react";

const useFetch = (url, options = {}, immediate = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (body = null) => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
          },
          ...options,
          body: body ? JSON.stringify(body) : null,
        });

        const result = await response.json();

        if (!response.ok) {
          // toast.error(result.message || "Request failed");
          // setError(result.message || "Request failed");
          throw new Error(result.message || "Request failed");
        }

        setData(result);

        return result;
      } catch (err) {
        setError(err.message);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [options, url],
  );
  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [fetchData, immediate]);

  return { data, loading, error, fetchData, setData };
};

export default useFetch;
