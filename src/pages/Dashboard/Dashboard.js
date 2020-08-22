import React from "react";
import { useSelector } from "react-redux";
import AppHeader from "../../components/AppHeader/AppHeader";
import SuperAdminDashboard from "../SuperAdminDashboard/SuperAdminDashboard";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import { ROLES } from "../../utils/constants";
import "./dashboard.scss";
import BenefactorDashboard from "../BenefactorDashboard/BenefactorDashboard";

const Dashboard = () => {
  const { roles } = useSelector((state) => state.user);

  const renderDashboardByRole = () => {
    if (roles.some((item) => item.name === ROLES.SUPER_ADMIN)) {
      return <SuperAdminDashboard />;
    } else if (roles.some((item) => item.name === ROLES.ADMIN)) {
      return <AdminDashboard />;
    } else if (roles.some((item) => item.name === ROLES.BENEFACTOR)) {
      return <BenefactorDashboard />;
    } else if (roles.some((item) => item.name === ROLES.BENEFICIARY)) {
      return "";
    }
  };

  return (
    <div className="dashboard-page">
      <AppHeader />
      <h1>Dashboard</h1>
      {renderDashboardByRole()}
    </div>
  );
};

export default Dashboard;
