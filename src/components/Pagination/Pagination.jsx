import React from "react";

const Pagination = ({ total, active }) => {
  const sequence = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );

  const activeElement = (number) => (
    <li className="page-item active" aria-current="page" key={number}>
      <span className="page-link">{number}</span>
    </li>
  );

  const inactiveElement = (number) => (
    <li className="page-item" key={number}>
      <a className="page-link" href="#">
        {number}
      </a>
    </li>
  );

  return (
    <nav aria-label="..." className="mt-3 float-right">
      <ul className="pagination pagination-sm">
        {sequence(1, total, 1).map((element) =>
          element === active ? activeElement(element) : inactiveElement(element)
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
