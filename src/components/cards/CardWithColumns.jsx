import React from "react";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

const CardWithColumns = ({ children }) => {
  return (
    <>
      <Card>
        <div className="row">{children}</div>
      </Card>
    </>
  );
};

export default CardWithColumns;
