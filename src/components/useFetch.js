//currently not using it anywhere

import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setResponse(null);
    setError(null);

    const fetchUrl = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setResponse(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUrl();
  }, [url]);

  return [response, loading, error];
};
