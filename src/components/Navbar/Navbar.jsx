import React from "react";
import { useContext } from "react";
import { PageConfigurationContext } from "../../contexts/PageConfigurationContext";
import Select from "../selector/Select";
import { Link } from "react-router-dom";

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
      <Link className="navbar-brand" to="/">
        Reactdex
      </Link>
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
