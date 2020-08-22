import React from "react";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NoMatch from "../pages/NoMatch/NoMatch";
import Benefactors from "../pages/Benefactors/Benefactors";
import Groups from "../pages/Groups/Groups";
import { ROLES } from "../utils/constants";
import Dashboard from "../pages/Dashboard/Dashboard";

export const routesPath = {
  default: "/",
  register: "/register",
  login: "/login",
  dashbord: "/dashboard",
  groups: "/groups",
  benefactors: "/benefactors",
  nomatch: "/*",
};

const { SUPER_ADMIN, ADMIN, BENEFACTOR, BENEFICIARY, ANONYMOUS } = ROLES;
const routes = [
  {
    name: "default",
    path: routesPath.default,
    exact: true,
    isPublic: true,
    roles: [ANONYMOUS],
    component: <Login />,
  },
  {
    name: "register",
    path: routesPath.register,
    exact: false,
    isPublic: true,
    roles: [ANONYMOUS],
    component: <Register />,
  },
  {
    name: "login",
    path: routesPath.login,
    exact: false,
    isPublic: true,
    roles: [ANONYMOUS],
    component: <Login />,
  },
  {
    name: "dashboard",
    path: routesPath.dashbord,
    exact: false,
    isPublic: false,
    roles: [SUPER_ADMIN, ADMIN, BENEFACTOR, BENEFICIARY],
    component: <Dashboard />,
  },
  {
    name: "benefactors",
    path: routesPath.benefactors,
    exact: false,
    isPublic: false,
    roles: [ADMIN, SUPER_ADMIN],
    component: <Benefactors />,
  },
  ,
  {
    name: "groups",
    path: routesPath.groups,
    exact: false,
    isPublic: false,
    roles: [ADMIN, SUPER_ADMIN],
    component: <Groups />,
  },
  {
    name: "nomatch",
    path: routesPath.nomatch,
    exact: false,
    isPublic: true,
    roles: [ANONYMOUS],
    component: <NoMatch />,
  },
];

export default routes;
