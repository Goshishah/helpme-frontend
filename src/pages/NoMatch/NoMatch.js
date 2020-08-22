import React from "react";
import "./no-match.scss";
import { useHistory } from "react-router-dom";
import { routesPath } from "../../routes/routesConfig";

const NoMatch = () => {
  const history = useHistory();
  return (
    <div className="no-match-page">
      <h5 onClick={() => history.push(routesPath.default)}>{`< home`}</h5>
      <h1>Page not found</h1>
    </div>
  );
};

export default NoMatch;
