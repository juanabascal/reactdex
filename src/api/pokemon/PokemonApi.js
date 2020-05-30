import useCallbackFetch from "../../hooks/useCallbackFetch";

const pokeApiListUrl = `https://pokeapi.co/api/v2/pokemon`;

export const PokemonRepositoryGetList = (pagination) => {
  return useCallbackFetch(
    `${pokeApiListUrl}?offset=${
      pagination.pageSize * (pagination.current - 1)
    }&limit=${pagination.pageSize}`
  );
};
