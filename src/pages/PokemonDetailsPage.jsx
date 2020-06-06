import React, { useEffect, useState } from "react";
import PokemonDetailsCard from "../components/cards/PokemonDetailsCard";
import PokemonImage from "../components/images/PokemonImage";
import _ from "lodash";
import { PokemonRepositoryGetPokemon } from "../api/pokemon/PokemonApi";
import LoadingSpinner from "../components/loading/LoadingSpinner";
import { FormattedMessage } from "react-intl";

const PokemonDetailsPage = ({ match: { params } }) => {
  const { id } = params;

  const [pokemon, setPokemon] = useState(null);

  const [callback, isLoading] = PokemonRepositoryGetPokemon(id);

  useEffect(() => {
    callback(setPokemon);
  }, []);

  return (
    <>
      <LoadingSpinner active={isLoading} />
      {pokemon && (
        <>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-5 mt-2">
              <li className="breadcrumb-item">
                <a href="#">Pokemon List</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {_.capitalize(pokemon.name)}
              </li>
            </ol>
          </nav>

          <div className="row mt-3">
            <div className="col-3">
              <PokemonImage id={pokemon.id} name={pokemon.name} />
            </div>
            <div className="col-9">
              <h1>
                {_.capitalize(pokemon.name)}{" "}
                <span className="small">(#{pokemon.id})</span>
              </h1>
              {pokemon.types.map((type) => (
                <span className="badge badge-success mr-2" key={type.id}>
                  {_.lowerCase(type.name)}
                </span>
              ))}

              <PokemonDetailsCard
                height={pokemon.height}
                weight={pokemon.weight}
                abilitiesNames={pokemon.abilities}
              />
            </div>
          </div>
          <div className="mt-3">
            <button type="button" className="btn btn-link float-left">
              {"<< "} <FormattedMessage id="navigation.prev" default="Prev" />
            </button>
            <button type="button" className="btn btn-link float-right">
              <FormattedMessage id="navigation.next" default="Next" /> {">>"}
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default PokemonDetailsPage;
