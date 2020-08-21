import React from "react";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SuperAdminHome from "../pages/SuperAdminHome/SuperAdminHome";
import AdminHome from "../pages/AdminHome/AdminHome";
import Home from "../pages/Home/Home";
import NoMatch from "../pages/NoMatch/NoMatch";
import Benefactors from "../pages/Benefactors/Benefactors";
import { ROLES } from "../utils/constants";

export const routesPath = {
  default: "/",
  register: "/register",
  login: "/login",
  superadminHome: "/superadmin-dashboard",
  adminHome: "/admin-dashboard",
  userHome: "/dashboard",
  benefactors: "/benefactors",
  nomatch: "/*",
};

const routes = [
  {
    name: "default",
    path: routesPath.default,
    exact: true,
    isPublic: true,
    roles: [ROLES.ANONYMOUS],
    // component: <LandingPage />,
  },
  {
    name: "register",
    path: routesPath.register,
    exact: false,
    isPublic: true,
    roles: [ROLES.ANONYMOUS],
    component: <Register />,
  },
  {
    name: "login",
    path: routesPath.login,
    exact: false,
    isPublic: true,
    roles: [ROLES.ANONYMOUS],
    component: <Login />,
  },
  {
    name: "superadmin",
    path: routesPath.superadminHome,
    exact: false,
    isPublic: false,
    roles: [ROLES.SUPER_ADMIN],
    component: <SuperAdminHome />,
  },
  {
    name: "admin",
    path: routesPath.adminHome,
    exact: false,
    isPublic: false,
    roles: [ROLES.ADMIN],
    component: <AdminHome />,
  },
  {
    name: "home",
    path: routesPath.userHome,
    exact: false,
    isPublic: false,
    roles: [ROLES.USER],
    component: <Home />,
  },
  {
    name: "benefactors",
    path: routesPath.benefactors,
    exact: false,
    isPublic: false,
    roles: [ROLES.ADMIN, ROLES.SUPER_ADMIN],
    component: <Benefactors />,
  },
  {
    name: "nomatch",
    path: routesPath.nomatch,
    exact: false,
    isPublic: true,
    roles: [ROLES.ANONYMOUS],
    component: <NoMatch />,
  },
];

export default routes;
