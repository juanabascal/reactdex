import React from "react";
import PokemonDetailsCard from "../components/cards/PokemonDetailsCard";
import PokemonImage from "../components/images/PokemonImage";
import { useState } from "react";
import _ from "lodash";

const PokemonDetailsPage = ({ id }) => {
  const [pokemon, setPokemon] = useState(
    {
      id: 1,
      name: "Bulbasur",
      abilities: ["Chlorophyll", "Overgrow"],
      types: [
        { id: 1, name: "grass" },
        { id: 2, name: "posion" },
      ],
      height: 50,
      weight: 30,
    },
    [id]
  );

  return (
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
            <span className="badge badge-success mr-2">
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
          {"<< Previous"}
        </button>
        <button type="button" className="btn btn-link float-right">
          {"Next >>"}
        </button>
      </div>
    </>
  );
};

export default PokemonDetailsPage;
