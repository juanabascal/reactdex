import React from "react";

const PokemonListItem = ({ id, name }) => {
  return (
    <div className="row">
      <div className="col-1">
        <h2>#{id}</h2>
      </div>
      <div className="col-11 d-flex align-items-center">
        <h5 className="mb-1 align-self-center">{name}</h5>
      </div>
    </div>
  );
};

export default PokemonListItem;
