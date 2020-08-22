import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import routes from "./routesConfig";

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* {routes.map((route) => (
          <Route
            key={route.name}
            exact={route.exact}
            path={route.path}
            children={route.component}
          />
        ))} */}

        <Route
          key={routes[0].name}
          exact={routes[0].exact}
          path={routes[0].path}
          children={routes[0].component}
        />
        <Route
          key={routes[1].name}
          exact={routes[1].exact}
          path={routes[1].path}
          children={routes[1].component}
        />
        <Route
          key={routes[2].name}
          exact={routes[2].exact}
          path={routes[2].path}
          children={routes[2].component}
        />
        {routes.map((route) => (
          <PrivateRoute key={route.name} exact={route.exact} path={route.path}>
            {route.component}
          </PrivateRoute>
        ))}
      </Switch>
    </Router>
  );
};

const PrivateRoute = (props) => {
  const { children, ...rest } = props;
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { referer: props.location.pathname },
            }}
          />
        );
      }}
    />
  );
};

export default Routes;
