import React from "react";
import PropTypes from "prop-types";

const Select = ({ data, onSelect, selected }) => {
  return (
    <>
      <select
        className="custom-select mr-sm-2 float-right"
        id="inlineFormCustomSelect"
        onChange={onSelect}
        defaultValue={selected}
      >
        {data.map((option) => (
          <option key={option.value} value={option.value}>
            {option.option}
          </option>
        ))}
      </select>
    </>
  );
};

Select.propTypes = {
  data: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Select;
