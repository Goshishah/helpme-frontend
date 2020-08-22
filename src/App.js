import React, { useEffect, useState } from "react";
import "./app.scss";
import Routes from "./routes/Routes";
import AppLoader from "./pages/AppLoader/AppLoader";
import { verifyService } from "./services/authService";
import { loginAction } from "./redux/userReducer";
import { useDispatch } from "react-redux";
// benefactor and beneficiary

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    verifyService()
      .then((response) => {
        const { success, data } = response;
        if (success) {
          dispatch(loginAction({ ...data, isAuthenticated: true }));
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [dispatch]);
  return <div className="app">{loading ? <AppLoader /> : <Routes />}</div>;
};

export default App;
