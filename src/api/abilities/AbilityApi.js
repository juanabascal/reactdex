import useCallbackFetch from "../../hooks/useCallbackFetch";
import { PageConfigurationContext } from "../../contexts/PageConfigurationContext";
import _ from "lodash";
import { useContext } from "react";

const url = `https://pokeapi.co/api/v2/ability`;

const abilityMapper = (data) => {
  const description = data.flavor_text_entries.filter(
    (entry) => entry.language.name === "es"
  )[0].flavor_text;
  const name = data.names.filter((entry) => entry.language.name === "es")[0]
    .name;

  return { name: name, text: description };
};

export const AbilityRepositoryGetAbility = (id) => {
  const { configuration } = useContext(PageConfigurationContext);

  return useCallbackFetch(`${url}/${id}`, abilityMapper);
};
