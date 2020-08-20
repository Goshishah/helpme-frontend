import React from "react";
import AppButton from "../AppButton/AppButton";
import { loginAction } from "../../redux/userReducer";
import { useDispatch, useSelector } from "react-redux";
import "./app-header.scss";
import { logoutService } from "../../services/authService";

const AppHeader = () => {
  const dispatch = useDispatch();
  const { firstname, lastname } = useSelector((state) => state.user);

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
      <div className="greeting-title">
        <span>{`Asslam O Alikum `}</span>
        <strong className="greeting-name">
          {firstname} {lastname}!
        </strong>
      </div>
    </div>
  );
};

export default AppHeader;
