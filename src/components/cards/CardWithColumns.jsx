import React from "react";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import Column from "../base/Column";
import FlushList from "../list/FlushList";

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
