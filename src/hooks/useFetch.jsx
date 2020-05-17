import { useState, useEffect } from "react";
import _ from "lodash";
import Axios from "axios";

function useFetch(fetchUrl) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get(fetchUrl).then(async (res) => {
      await new Promise((r) => setTimeout(r, 2000));

      const pokeList = res.data.results.map((item) => {
        const id = _.split(item.url, "/")[6];
        return { name: _.capitalize(item.name), id: id };
      });
      setData(pokeList);
      setLoading(false);
    });
  }, [fetchUrl]);
  return [data, loading];
}
export default useFetch;
