import React from "react";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NoMatch from "../pages/NoMatch/NoMatch";
import Benefactors from "../pages/Benefactors/Benefactors";
import Beneficiaries from "../pages/Beneficiaries/Beneficiaries";
import BeneficiaryDetail from "../pages/BeneficiaryDetail/BeneficiaryDetail";
import Groups from "../pages/Groups/Groups";
import Dashboard from "../pages/Dashboard/Dashboard";
import Landing from "../pages/Landing/Landing";
import { ROLES } from "../utils/constants";

export const routesPath = {
  default: "/",
  register: "/register",
  login: "/login",
  dashbord: "/dashboard",
  groups: "/groups",
  benefactors: "/benefactors",
  beneficiaries: "/beneficiaries",
  beneficiaryDetail: "/beneficiary-detail/:id",
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
    component: <Landing />,
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
  {
    name: "beneficiaries",
    path: routesPath.beneficiaries,
    exact: false,
    isPublic: false,
    roles: [ADMIN, SUPER_ADMIN],
    component: <Beneficiaries />,
  },
  {
    name: "beneficiaryDetail",
    path: routesPath.beneficiaryDetail,
    exact: false,
    isPublic: false,
    roles: [ADMIN, SUPER_ADMIN],
    component: <BeneficiaryDetail />,
  },
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
