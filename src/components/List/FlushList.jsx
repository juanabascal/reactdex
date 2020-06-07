import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useModal from "../../hooks/useModal";
import Modal from "../modal/Modal";

const FlushList = ({ elements, icon }) => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <ul className="list-group list-group-flush">
        {elements.map((element) => (
          <li className="list-group-item" key={element.id}>
            {element.name}
            {icon && (
              <span
                className="float-right"
                style={{ cursor: "pointer" }}
                onClick={toggle}
              >
                <FontAwesomeIcon icon={icon} />
              </span>
            )}
          </li>
        ))}
      </ul>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        header="Blaze"
        text="This should be set dynamically."
      />
    </>
  );
};

export default FlushList;
