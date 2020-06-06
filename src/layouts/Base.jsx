import React from "react";
import { Navbar } from "../components/navbar";
import List from "../components/list/List";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PokemonDetailsPage from "../pages/PokemonDetailsPage";
import NotFoundPage from "../pages/NotFoundPage";

const Base = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className="container pt-2">
          <Switch>
            <Route path="/pokemon/:id" component={PokemonDetailsPage} />
            <Route path="/" component={List} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
};

export default Base;
