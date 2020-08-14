import React from "react";
import "./app-button.scss";

const AppButton = (props) => {
  const { type = "button", className = "app-btn", children, onClick } = props;
  return (
    <button type={type} className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default AppButton;
