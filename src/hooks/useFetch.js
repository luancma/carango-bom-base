import { useEffect, useState } from "react";

export const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("Carregando...");
    setData(null);
    setError(null);
    
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setLoading(false);
        setData(response)
      }) 
      .catch(error => {
        console.error(error);
      });
  }, [url]);

  return { data, loading, error };
};
