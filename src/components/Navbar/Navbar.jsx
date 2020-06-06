import React from "react";
import { useContext } from "react";
import { PageConfigurationContext } from "../../contexts/PageConfigurationContext";
import Select from "../selector/Select";

const Navbar = () => {
  const languages = [
    { value: "en", option: "English", default: true },
    { value: "es", option: "Español", default: false },
  ];

  const { configuration, setConfiguration } = useContext(
    PageConfigurationContext
  );

  const onHandleLanguageChange = (event) => {
    console.log(event.target.value);
    setConfiguration({ ...configuration, language: event.target.value });
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Reactdex
      </a>
      <div className="col-auto my-1">
        <Select
          onSelect={onHandleLanguageChange}
          data={languages}
          selected={configuration.language}
        />
      </div>
    </nav>
  );
};

export default Navbar;
