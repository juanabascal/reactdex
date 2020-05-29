import React from "react";
import CardWithColumns from "./CardWithColumns";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import FlushList from "../list/FlushList";
import Column from "../base/Column";

const PokemonDetailsCard = ({ height, weight, abilitiesNames }) => {
  return (
    <CardWithColumns>
      <Column>
        <h5>Height</h5>
        <span>{height}</span>
        <h5 className="mt-3">Weight</h5>
        <span>{weight}</span>
      </Column>
      <Column>
        <h5>Abilities</h5>
        <FlushList elements={abilitiesNames} icon={faQuestionCircle} />
      </Column>
    </CardWithColumns>
  );
};

export default PokemonDetailsCard;
