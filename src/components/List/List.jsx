import React from "react";
import Pagination from "../pagination/Pagination";
import PokemonListItem from "./PokemonListItem";
import { useEffect } from "react";
import { useState } from "react";
import _ from "lodash";
import LoadingSpinner from "../loading/LoadingSpinner";
import useCallbackFetch from "../../hooks/useCallbackFetch";
import { useMemo } from "react";
import { PokemonRepositoryGetList } from "../../api/pokemon/PokemonApi";

const List = () => {
  const [list, setList] = useState([]);
  const [pagination, setPagination] = useState({
    total: 50,
    numberOfButtons: 5,
    current: 1,
    pageSize: 20,
  });

  const [callback, isLoading] = PokemonRepositoryGetList(pagination);

  useEffect(() => {
    callback(setList);
  }, [pagination.current]);

  const handleOnPageChange = (number) => {
    const newPagination = { ...pagination, current: number };
    setPagination(newPagination);
  };

  return (
    <>
      <LoadingSpinner active={isLoading} />
      {!isLoading && (
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
      )}
      <Pagination
        total={pagination.total}
        current={pagination.current}
        show={pagination.numberOfButtons}
        onChangePage={handleOnPageChange}
      />
    </>
  );
};

export default List;
