import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

import AppInput from "../../components/AppInput/AppInput";
import AppButton from "../../components/AppButton/AppButton";
import {
  addGroupservice,
  updateGroupService,
} from "../../services/groupsService";

const AddGroup = (props) => {
  const { onClose, loadGroups, selectedGroup } = props;

  const getInitialValues = () => {
    if (selectedGroup) {
      return selectedGroup;
    }
    return {
      name: "",
      address: "",
      email: "",
    };
  };

  const handleAddGroup = (group) => {
    addGroupservice(group)
      .then((response) => {
        console.log(response);
        const { success, data, message } = response;
        if (success) {
          loadGroups();
        } else {
          // formik.setFieldError("email", message);
        }
        onClose();
      })
      .catch((error) => {
        console.log("error.......", error);
        onClose();
      });
  };

  const handleUpdateGroup = (group) => {
    updateGroupService(group)
      .then((response) => {
        console.log(response);
        const { success, data, message } = response;
        if (success) {
          loadGroups();
        } else {
          // formik.setFieldError("email", message);
        }
        onClose();
      })
      .catch((error) => {
        console.log("error.......", error);
        onClose();
      });
  };

  const formik = useFormik({
    initialValues: getInitialValues(),
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
      const { id, name, address, email } = values;
      const group = { name, address, email };

      if (selectedGroup) {
        handleUpdateGroup({ id, ...group });
      } else {
        handleAddGroup(group);
      }
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
        <AppButton onClick={handleSubmit}>
          {selectedGroup ? "Update" : "Create"}
        </AppButton>
        <AppButton onClick={onClose}>Cancel</AppButton>
      </div>
    </form>
  );
};

export default AddGroup;
