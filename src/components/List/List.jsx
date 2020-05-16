import React from "react";
import Pagination from "../Pagination/Pagination";
import PokemonListItem from "./PokemonListItem";

const List = () => {
  const list = [
    { id: 1, name: "Bulbasaur" },
    { id: 2, name: "Ivysaur" },
    { id: 3, name: "Venasaur" },
  ];

  return (
    <>
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action">
          <PokemonListItem />
        </a>
      </div>
      <Pagination />
    </>
  );
};

export default List;
