import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FlushList = ({ elements, icon }) => {
  return (
    <>
      <ul className="list-group list-group-flush">
        {elements.map((element) => (
          <li className="list-group-item" key={element.id}>
            {element.name}
            {icon && (
              <span className="float-right">
                <FontAwesomeIcon icon={icon} />
              </span>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FlushList;
