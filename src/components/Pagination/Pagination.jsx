import React, { useCallback, useMemo } from "react";
import _ from "lodash";

const Pagination = ({ total, current, show, onChangePage }) => {
  const sequence = useCallback(
    (start, stop, step) =>
      Array.from(
        { length: (stop - start) / step + 1 },
        (_, i) => start + i * step
      ),
    []
  );

  const activeElement = (number) => (
    <li className="page-item active" aria-current="page" key={number}>
      <span className="page-link">{number}</span>
    </li>
  );

  const inactiveElement = (number) => (
    <li className="page-item" key={number}>
      <a className="page-link" href="/#" onClick={() => onChangePage(number)}>
        {number}
      </a>
    </li>
  );

  const getLastElement = useCallback(() => {
    let margin = 0;
    if (show % 2 === 0) {
      margin = show / 2;
    } else {
      margin = _.floor(show / 2);
    }

    if (current + margin < show) {
      return show;
    } else if (current + margin <= total) {
      return current + margin;
    } else {
      return total;
    }
  }, [current, total, show]);

  const getFirstElement = useCallback(() => {
    let margin = 0;
    if (show % 2 === 0) {
      margin = show / 2 - 1;
    } else {
      margin = _.floor(show / 2);
    }

    if (current - margin > total - show) {
      return total - show + 1;
    } else if (current - margin >= 1) {
      return current - margin;
    } else {
      return 1;
    }
  }, [current, total, show]);

  const firstElement = useMemo(() => getFirstElement(), [getFirstElement]);
  const lastElement = useMemo(() => getLastElement(), [getLastElement]);

  return (
    <nav aria-label="..." className="mt-3 float-right">
      <ul className="pagination pagination-sm">
        {sequence(firstElement, lastElement, 1).map((element) =>
          element === current
            ? activeElement(element)
            : inactiveElement(element)
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
