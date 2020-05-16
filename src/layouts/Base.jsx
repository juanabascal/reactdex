import React from "react";
import { Navbar } from "../components/Navbar";
import List from "../components/List/List";

const Base = () => {
  return (
    <>
      <Navbar />
      <main className="container-fluid pt-2">
        <List />
      </main>
    </>
  );
};

export default Base;
