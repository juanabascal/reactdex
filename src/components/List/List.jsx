import React from "react";
import Pagination from "../Pagination/Pagination";
import PokemonListItem from "./PokemonListItem";
import { useEffect } from "react";
import Axios from "axios";
import { useState } from "react";
import _ from "lodash";

const List = () => {
  const [list, setList] = useState(null);
  const [pagination, setPagination] = useState(
    {
      total: 50,
      show: 5,
      current: 1,
      pageSize: 20,
    },
    []
  );

  useEffect(() => {
    Axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${
        pagination.pageSize * (pagination.current - 1)
      }`
    ).then((res) => {
      const pokeList = res.data.results.map((item) => {
        const id = _.split(item.url, "/")[6];
        return { name: _.capitalize(item.name), id: id };
      });

      setList(pokeList);
    });
  }, [pagination.current]);

  const handleOnPageChange = (number) => {
    const newPagination = { ...pagination, current: number };
    setPagination(newPagination);
  };

  return (
    <>
      <div className="list-group">
        {list &&
          list.map((item) => (
            <a
              key={item.id}
              href="#"
              className="list-group-item list-group-item-action"
            >
              {/* Como podría enchufar aquí otro tipo de items? */}
              <PokemonListItem id={item.id} name={item.name} />
            </a>
          ))}
      </div>
      <Pagination
        total={pagination.total}
        current={pagination.current}
        show={pagination.show}
        onChangePage={handleOnPageChange}
      />
    </>
  );
};

export default List;
