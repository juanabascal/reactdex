import { useState, useCallback } from "react";
import Axios from "axios";

const useCallbackFetch = (url, mapper = null) => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState([]);
  const [loading, setLoading] = useState(false);

  const method = useCallback(
    (callback) => {
      setLoading(true);
      Axios.get(url)
        .then(async (res) => {
          await new Promise((r) => setTimeout(r, 500));

          const result = mapper === null ? res.data : mapper(res.data);

          callback(result);
          setData(result);
          setLoading(false);
        })
        .catch((res) => {
          setStatus(res.response.status);
        });
    },
    [url, mapper]
  );

  return [method, loading, status, data];
};

export default useCallbackFetch;
