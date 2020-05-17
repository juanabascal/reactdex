import { useState, useCallback } from "react";
import _ from "lodash";
import Axios from "axios";

function useCallbackFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const method = useCallback(
    (callback) => {
      setLoading(true);
      Axios.get(url).then(async (res) => {
        await new Promise((r) => setTimeout(r, 500));

        const pokeList = res.data.results.map((item) => {
          const id = _.split(item.url, "/")[6];
          return { name: _.capitalize(item.name), id: id };
        });

        callback(pokeList);
        setData(pokeList);
        setLoading(false);
      });
    },
    [url]
  );

  return [method, loading, data];
}

export default useCallbackFetch;
