import React from "react";
import { useNavigate } from "react-router-dom";

export const Button = ({
  click = () => {},
  label = "Next",
  variant = "primary",
  isDisabled = false,
}) => {
  const history = useNavigate();

  const handleClick = () => {
    if (label === "Back") {
      history(-1);
    } else {
      click();
    }
  };

  return (
    <button
      type="button"
      className={`btn py-2 px-4 ${
        variant === "outline" ? "btn-outline-primary" : "btn-primary"
      }`}
      style={{cursor: (isDisabled ? 'not-allowed': 'pointer')}}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
