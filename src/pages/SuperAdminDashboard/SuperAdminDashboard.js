import React from "react";
import { useHistory } from "react-router-dom";
import "./superadmin-dashboard.scss";

const SuperAdminDashboard = () => {
  const history = useHistory();
  return (
    <div className="superadmin-home-page">
      <div className="page-body">
        <div className="card" onClick={() => history.push("/groups")}>
          Groups
        </div>
        <div className="card" onClick={() => history.push("/benefactors")}>
          Benefactors
        </div>
        <div className="card" onClick={() => history.push("/beneficiaries")}>
          Beneficiaries
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
