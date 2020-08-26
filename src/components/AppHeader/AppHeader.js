import React from "react";
import AppButton from "../AppButton/AppButton";
import { logoutAction } from "../../redux/userReducer";
import { useDispatch, useSelector } from "react-redux";
import "./app-header.scss";
import { logoutService, removeAuthToken } from "../../services/authService";
import { useHistory } from "react-router-dom";
import { routesPath } from "../../routes/routesConfig";

const AppLogo = () => {
  const history = useHistory();
  const handleLanding = () => history.push(routesPath.default);

  return (
    <img
      className="app-logo"
      src="https://logodix.com/logo/2004335.png"
      onClick={handleLanding}
    />
  );
};

const AppHeader = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <div className="app-header">
      <AppLogo />
      <div>
        {isAuthenticated ? <AuthenticatedHeader /> : <UnauthenticatedHeader />}
      </div>
    </div>
  );
};

const AuthenticatedHeader = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { firstname, lastname, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const handleLogout = () => {
    logoutService({ email: "" })
      .then((response) => {
        const { success } = response;
        if (success) {
          dispatch(logoutAction());
          removeAuthToken();
        }
      })
      .catch((error) => {
        console.log("error.......", error);
      });
  };

  const handleDashboard = () => history.push(routesPath.dashbord);

  return (
    <>
      <AppButton onClick={handleLogout}>Logout</AppButton>
      <AppButton onClick={handleDashboard}>Dashboard</AppButton>
      <div className="greeting-title">
        <span>{`Asslam O Alikum `}</span>
        <strong className="greeting-name">
          {firstname} {lastname}!
        </strong>
      </div>
    </>
  );
};

const UnauthenticatedHeader = () => {
  const history = useHistory();
  const handleLogin = () => history.push(routesPath.login);
  const handleRegister = () => history.push(routesPath.register);
  return (
    <>
      <AppButton onClick={handleLogin}>Login</AppButton>
      <AppButton onClick={handleRegister}>Register</AppButton>
    </>
  );
};

export default AppHeader;
