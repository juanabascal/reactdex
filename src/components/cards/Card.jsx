import React from "react";

const Card = ({ children }) => {
  return (
    <div className="card mt-3">
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
