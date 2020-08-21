import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import AppInput from "../../components/AppInput/AppInput";
import AppButton from "../../components/AppButton/AppButton";
import { registerService } from "../../services/authService";

import { useHistory } from "react-router-dom";
import { routesPath } from "../../routes/routesConfig";
import "./register.scss";

const Register = () => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      roleName: "",
    },
    validationSchema: Yup.object().shape({
      firstname: Yup.string()
        .max(320, "Username is too long")
        .required("Required"),
      lastname: Yup.string().max(320, "Username is too long"),
      username: Yup.string()
        .max(320, "Username is too long")
        .required("Required"),
      email: Yup.string()
        .email("Please enter valid email")
        .max(320, "Email is too long")
        .required("Required"),
      password: Yup.string()
        .max(200, "Password is too long")
        .required("Required"),
      roleName: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      const {
        firstname,
        lastname,
        username,
        email,
        password,
        roleName,
      } = values;
      registerService({
        firstname,
        lastname,
        username,
        email,
        password,
        roleName,
      })
        .then((response) => {
          handleLogin();
        })
        .catch((error) => {
          console.log("error.......", error);
        });
    },
  });

  const handleLogin = () => {
    history.push(routesPath.login);
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = formik;
  return (
    <div className="register-page">
      <form className="app-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-field">
          <AppInput
            name="firstname"
            value={values.firstname}
            placeholder="First name"
            error={touched.firstname && errors.firstname}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <AppInput
            name="lastname"
            value={values.lastname}
            placeholder="Last name"
            error={touched.lastname && errors.lastname}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <AppInput
            name="username"
            value={values.username}
            placeholder="Username"
            error={touched.username && errors.username}
            onChange={handleChange}
          />
        </div>
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
          <select
            name="roleName"
            value={values.roleName}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Select type</option>
            <option value="BENEFICIARY">Beneficiary/Taker</option>
            <option value="BENEFACTOR">Benefactor/Doner</option>
          </select>
          <span className="input-error">
            {touched.password && errors.password}
          </span>
        </div>
        <div className="form-field">
          <AppButton onClick={handleLogin}>Login</AppButton>
          <AppButton onClick={handleSubmit}>Register</AppButton>
        </div>
      </form>
    </div>
  );
};

export default Register;
