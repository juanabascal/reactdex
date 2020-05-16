import React from "react";

const Pagination = () => {
  return (
    <nav aria-label="..." className="mt-3 float-right">
      <ul className="pagination pagination-sm">
        <li className="page-item active" aria-current="page">
          <span className="page-link">
            1<span className="sr-only">(current)</span>
          </span>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
