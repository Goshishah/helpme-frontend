import React from "react";
import "./app-input.scss";

const AppInput = (props) => {
  const {
    name,
    type = "input",
    value,
    placeholder,
    className = "app-input",
    error,
    onChange,
  } = props;
  return (
    <>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        {...props}
      />
      {error && <label className="input-error">{error}</label>}
    </>
  );
};

export default AppInput;
