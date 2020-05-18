import React from "react";
import TwoColumnCard from "../components/cards/TwoColumnCard";

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
          <img
            src="https://pokeres.bastionbot.org/images/pokemon/1.png"
            className="img-fluid pr-4"
            alt="Bulbasaur"
          />
        </div>
        <div className="col-9">
          <h1>
            Bulbasaur <span className="small">(#1)</span>
          </h1>
          <span className="badge badge-success">grass</span>
          <span className="badge badge-dark ml-2">poison</span>

          <TwoColumnCard />
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
