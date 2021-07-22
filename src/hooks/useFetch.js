import { useEffect, useState } from "react";

export const useFetch = ({ url, loadMessage = "Caregando..." }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(loadMessage);
    setData(null);
    setError(null);

    const url = fetch(url)
      .then(response => {
        if (validateFetch(response)) {
          response.json().then(response => {
            setData(response);
            setLoading(null);
          });
        }
        throw new Error("Network response was not ok");
      })
      .catch(error => {
        setLoading(null);
        setError("Erro ao buscar os dados");
      });

    const validateFetch = response => response.status === 200;
  }, [url, loadMessage]);

  return { data, loading, error };
};
