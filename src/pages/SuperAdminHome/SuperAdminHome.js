import React from "react";
import { useHistory } from "react-router-dom";
import AppHeader from "../../components/AppHeader/AppHeader";
import "./super-admin-home.scss";

const SuperAdminHome = () => {
  const history = useHistory();
  return (
    <div className="superadmin-home-page">
      <AppHeader />
      <div>
        <button onClick={() => history.push("/benefactors")}>
          benefactors
        </button>
      </div>
      <h1>Super Admin Home</h1>
    </div>
  );
};

export default SuperAdminHome;
