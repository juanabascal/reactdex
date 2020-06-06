import React from "react";
import Base from "./layouts/Base";
import { IntlProvider } from "react-intl";
import es from "./intl/es.json";
import en from "./intl/en.json";

const App = () => {
  return (
    <IntlProvider languages="en" messages={en}>
      <Base />
    </IntlProvider>
  );
};

export default App;
