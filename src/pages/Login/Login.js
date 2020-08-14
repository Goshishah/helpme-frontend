import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import AppInput from "../../components/AppInput/AppInput";
import AppButton from "../../components/AppButton/AppButton";
import { loginAction } from "../../redux/authReducer";
import { loginService } from "../../services/authService";

import "./login.scss";
import { useHistory } from "react-router-dom";
import { routesPath } from "../../routes/routesConfig";
import { ROLES } from "../../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "superadmin@helpme.pk",
      password: "123456",
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
          dispatch(loginAction({ isAuthenticated: response.isAuthenticated }));
          if (response.roles.some((item) => item.name === ROLES.SUPER_ADMIN)) {
            history.push(routesPath.superadminHome);
          } else if (response.roles.some((item) => item.name === ROLES.ADMIN)) {
            history.push(routesPath.adminHome);
          } else if (response.roles.some((item) => item.name === ROLES.USER)) {
            history.push(routesPath.userHome);
          }
        })
        .catch((error) => {
          console.log("error.......", error);
        });
    },
  });

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
        </div>
      </form>
    </div>
  );
};

export default Login;
