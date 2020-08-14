import React from "react";
import AppButton from "../AppButton/AppButton";
import { loginAction } from "../../redux/authReducer";
import { useDispatch } from "react-redux";
import "./app-header.scss";

const AppHeader = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(loginAction({ isAuthenticated: false }));
  };

  return (
    <div className="app-header">
      <AppButton onClick={handleLogout}>Logout</AppButton>
    </div>
  );
};

export default AppHeader;
