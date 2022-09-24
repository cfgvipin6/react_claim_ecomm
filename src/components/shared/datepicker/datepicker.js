import React from "react";

export const Datepicker = ({ name, label, value, onChange }) => {
  return (
    <div>
      <label className="form-label">{label}</label>
      <input
        type="date"
        className="form-control p-2"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
