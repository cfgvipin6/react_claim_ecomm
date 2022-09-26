import React from "react";

export const Card = ({
  imgSrc,
  title,
  description,
  children,
  selected = false,
}) => {
  return (
    <div
      className="border border-3 rounded-3 p-3 active c-pointer"
      style={selected ? { outline: "2px solid black" } : {}}
    >
      <h6 className="d-flex align-items-center">
        <img src={imgSrc} alt="maintenance" width="35" className="me-3" />{" "}
        {title}
      </h6>
      <p>{description}</p>
      {children ? children : null}
    </div>
  );
};
