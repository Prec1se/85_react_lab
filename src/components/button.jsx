import React from "react";

const Button = ({ type, className, label, onClick }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
