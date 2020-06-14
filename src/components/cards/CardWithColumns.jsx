import React from "react";
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
