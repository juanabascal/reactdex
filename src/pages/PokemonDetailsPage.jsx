import React from "react";
import CardWithColumns from "../components/cards/CardWithColumns";
import PokemonDetailsCard from "../components/cards/PokemonDetailsCard";
import PokemonImage from "../components/images/PokemonImage";

const PokemonDetailsPage = () => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb mb-5 mt-2">
          <li className="breadcrumb-item">
            <a href="#">Pokemon List</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Bulbasaur
          </li>
        </ol>
      </nav>

      <div className="row mt-3">
        <div className="col-3">
          <PokemonImage id={1} />
        </div>
        <div className="col-9">
          <h1>
            Bulbasaur <span className="small">(#1)</span>
          </h1>
          <span className="badge badge-success">grass</span>
          <span className="badge badge-dark ml-2">poison</span>

          <PokemonDetailsCard
            height="30"
            weight={50}
            abilitiesNames={["Chlorophyll", "Overgrow"]}
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
