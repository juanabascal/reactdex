import React, { useState } from "react";
import Base from "./layouts/Base";
import { PageConfigurationContext } from "./contexts/PageConfigurationContext";
import { IntlProvider } from "react-intl";
import esJson from "./intl/es.json";
import enJson from "./intl/en.json";

const App = () => {
  const languageFiles = {
    es: esJson,
    en: enJson,
  };

  const [configuration, setConfiguration] = useState({ language: "en" });
  const value = { configuration, setConfiguration };

  return (
    <PageConfigurationContext.Provider value={value}>
      <IntlProvider
        locale={configuration.language}
        messages={languageFiles[configuration.language]}
      >
        <Base />
      </IntlProvider>
    </PageConfigurationContext.Provider>
  );
};

export default App;
