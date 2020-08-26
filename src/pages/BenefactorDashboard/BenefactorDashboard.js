import React from "react";
import { useHistory } from "react-router-dom";
import SideNav from "../../components/SideNav/SideNav";
import Beneficiary from "../../components/Beneficiary/Beneficiary";
import "./benefactor-dashboard.scss";

const Beneficiaries = () => {
  return (
    <div className="beneficiaries">
      <Beneficiary />
    </div>
  );
};

const BenefactorDashboard = () => {
  const history = useHistory();
  const options = [
    {
      id: 1,
      title: "Dashboard",
      onClick: () => history.push("/beneficiaries"),
    },
    {
      id: 1,
      title: "Your Beneficiaries",
      onClick: () => history.push("/beneficiaries"),
    },
    {
      id: 1,
      title: "Donation Summary",
      onClick: () => history.push("/beneficiaries"),
    },
    {
      id: 1,
      title: "Commitments",
      onClick: () => history.push("/beneficiaries"),
    },
    {
      id: 1,
      title: "Profile Settings",
      onClick: () => history.push("/beneficiaries"),
    },
  ];
  return (
    <div className="benefactor-dashboard-page">
      <div className="page-body">
        <SideNav options={options} />
        <Beneficiaries />
      </div>
    </div>
  );
};

export default BenefactorDashboard;
