import { useEffect, useState } from "react";

export function useAPI(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, [url]);

  return { data };
}
