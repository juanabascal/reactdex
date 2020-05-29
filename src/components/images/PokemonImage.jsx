import React from "react";

const PokemonImage = ({ id, name }) => {
  return (
    <img
      src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
      className="img-fluid pr-4"
      alt={name}
    />
  );
};

export default PokemonImage;
