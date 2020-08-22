import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

import AppInput from "../../components/AppInput/AppInput";
import AppButton from "../../components/AppButton/AppButton";
import { addGroupservice } from "../../services/groupsService";

const AddGroup = (props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      email: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().max(150, "Name is too long").required("Required"),
      address: Yup.string()
        .max(500, "Address is too long")
        .required("Required"),
      email: Yup.string()
        .email("Please enter valid email")
        .max(320, "Email is too long")
        .required("Required"),
    }),
    onSubmit: (values) => {
      const { name, address, email } = values;
      const group = { name, address, email };
      addGroupservice(group)
        .then((response) => {
          console.log(response);
          const { success, data, message } = response;
          if (success) {
            props.loadGroups();
          } else {
            // formik.setFieldError("email", message);
          }
          props.onClose();
        })
        .catch((error) => {
          console.log("error.......", error);
          props.onClose();
        });
    },
  });
  const { values, errors, touched, handleChange, handleSubmit } = formik;
  return (
    <form className="app-form" onSubmit={(e) => e.preventDefault()}>
      <div className="form-field">
        <AppInput
          name="name"
          value={values.name}
          placeholder="Name"
          error={touched.name && errors.name}
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
          name="address"
          value={values.address}
          placeholder="Address"
          error={touched.address && errors.address}
          onChange={handleChange}
        />
      </div>
      <div className="form-field">
        <AppButton onClick={handleSubmit}>Create</AppButton>
      </div>
    </form>
  );
};

export default AddGroup;
