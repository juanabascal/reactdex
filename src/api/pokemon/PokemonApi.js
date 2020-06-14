import useCallbackFetch from "../../hooks/useCallbackFetch";
import _ from "lodash";
import { useCallback } from "react";

const url = `https://pokeapi.co/api/v2/pokemon`;

const Index = (pagination) => {
  const mapper = useCallback((data) => {
    return data.results.map((item) => {
      const id = _.split(item.url, "/")[6];
      return { name: _.capitalize(item.name), id: id };
    });
  }, []);

  return useCallbackFetch(
    `${url}?offset=${pagination.pageSize * (pagination.current - 1)}&limit=${
      pagination.pageSize
    }`,
    mapper
  );
};

const Show = (id) => {
  const mapper = useCallback((data) => {
    return {
      id: data.id,
      name: _.capitalize(data.name),
      abilities: data.abilities.map((item) => ({
        id: _.split(item.ability.url, "/")[6],
        name: _.capitalize(item.ability.name),
      })),
      types: data.types.map((item) => ({
        id: _.split(item.type.url, "/")[6],
        name: _.lowerCase(item.type.name),
      })),
      height: _.capitalize(data.height),
      weight: _.capitalize(data.weight),
    };
  }, []);

  return useCallbackFetch(`${url}/${id}`, mapper);
};

export default { index: Index, show: Show };
