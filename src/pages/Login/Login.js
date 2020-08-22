import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

import AppInput from "../../components/AppInput/AppInput";
import AppButton from "../../components/AppButton/AppButton";
import { loginService, setAuthToken } from "../../services/authService";
import { loginAction } from "../../redux/userReducer";
import { routesPath } from "../../routes/routesConfig";
import "./login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isAuthenticated, roles } = useSelector((state) => state.user);
  history.push(
    isAuthenticated ? history.push(routesPath.dashbord) : routesPath.login
  );

  const formik = useFormik({
    initialValues: {
      email: "superadmin@helpme.pk",
      password: "123",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Please enter valid email")
        .max(320, "Email is too long")
        .required("Required"),
      password: Yup.string()
        .max(200, "Password is too long")
        .required("Required"),
    }),
    onSubmit: (values) => {
      const { email, password } = values;
      loginService({ email, password })
        .then((response) => {
          console.log(response);
          const { success, data, message } = response;
          if (success) {
            setAuthToken(data.accessToken);
            dispatch(
              loginAction({ ...data, isAuthenticated: !!data.accessToken })
            );
            history.push(routesPath.dashbord);
          } else {
            formik.setFieldError("email", message);
          }
        })
        .catch((error) => {
          console.log("error.......", error);
        });
    },
  });

  const handleRegister = () => {
    history.push(routesPath.register);
  };

  const { values, errors, touched, handleChange, handleSubmit } = formik;
  return (
    <div className="login-page">
      <form className="app-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-field">
          <AppInput
            name="email"
            value={values.email}
            placeholder="Email"
            error={touched.email && errors.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <AppInput
            name="password"
            type="password"
            value={values.password}
            placeholder="Password"
            error={touched.password && errors.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <AppButton onClick={handleSubmit}>Login</AppButton>
          <AppButton onClick={handleRegister}>Register</AppButton>
        </div>
      </form>
    </div>
  );
};

export default Login;
