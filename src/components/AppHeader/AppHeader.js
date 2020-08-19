import React from "react";
import AppButton from "../AppButton/AppButton";
import { loginAction } from "../../redux/authReducer";
import { useDispatch } from "react-redux";
import "./app-header.scss";
import { logoutService } from "../../services/authService";

const AppHeader = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    logoutService({ email: "" })
      .then((response) => {
        dispatch(loginAction({ isAuthenticated: response.isAuthenticated }));
      })
      .catch((error) => {
        console.log("error.......", error);
      });
  };

  return (
    <div className="app-header">
      <AppButton onClick={handleLogout}>Logout</AppButton>
    </div>
  );
};

export default AppHeader;
