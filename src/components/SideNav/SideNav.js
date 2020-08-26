import React from "react";
import "./side-nav.scss";

const SideNav = ({ options }) => {
  return (
    <ul className="list-cnt">
      {options.map((option) => (
        <li key={option.id} className="list-item" onClick={option.onClick}>
          {option.name}
        </li>
      ))}
    </ul>
  );
};
export default SideNav;
