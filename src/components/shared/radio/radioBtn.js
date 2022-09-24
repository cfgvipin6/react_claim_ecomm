import React from "react";

export const RadioBtn = ({ name, item, selectedValue, onChange }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        id={item.label}
        name={name}
        checked={selectedValue === item.label}
        value={item.label}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={item.label}>
        {item.label}
      </label>
    </div>
  );
};
