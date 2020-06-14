import useCallbackFetch from "../../hooks/useCallbackFetch";

const url = `https://pokeapi.co/api/v2/ability`;

export const Show = (id) => {
  const mapper = (data) => {
    const description = data.flavor_text_entries.filter(
      (entry) => entry.language.name === "es"
    )[0].flavor_text;
    const name = data.names.filter((entry) => entry.language.name === "es")[0]
      .name;

    return { name: name, text: description };
  };

  return useCallbackFetch(`${url}/${id}`, mapper);
};

export default { show: Show };
