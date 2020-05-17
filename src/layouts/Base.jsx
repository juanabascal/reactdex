import React from "react";
import { Navbar } from "../components/navbar";
import List from "../components/list/List";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "../components/pages/NotFoundPage";

const Base = () => {
  return (
    <>
      <Navbar />
      <main className="container-fluid pt-2">
        <BrowserRouter>
          <Switch>
            <Route path="/pokemon" component={List} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </main>
    </>
  );
};

export default Base;
