import React from "react";
import CardWithColumns from "./CardWithColumns";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import FlushList from "../list/FlushList";
import Column from "../base/Column";
import { FormattedMessage } from "react-intl";
import _ from "lodash";

const PokemonDetailsCard = ({ height, weight, abilitiesNames }) => {
  return (
    <CardWithColumns>
      <Column>
        <h5>
          {/* TODO: Move the capitalize logic to another function. */}
          <FormattedMessage id="pokemon.height">
            {(text) => _.capitalize(text)}
          </FormattedMessage>
        </h5>
        <span>{height}</span>
        <h5 className="mt-3">
          <FormattedMessage id="pokemon.weight">
            {(text) => _.capitalize(text)}
          </FormattedMessage>
        </h5>
        <span>{weight}</span>
      </Column>
      <Column>
        <h5>
          <FormattedMessage id="pokemon.abilities">
            {(text) => _.capitalize(text)}
          </FormattedMessage>
        </h5>
        <FlushList elements={abilitiesNames} icon={faQuestionCircle} />
      </Column>
    </CardWithColumns>
  );
};

export default PokemonDetailsCard;
