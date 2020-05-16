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
        {list.map((item) => (
          <a
            key={item.id}
            href="#"
            className="list-group-item list-group-item-action"
          >
            <PokemonListItem id={item.id} name={item.name} />
          </a>
        ))}
      </div>
      <Pagination />
    </>
  );
};

export default List;
