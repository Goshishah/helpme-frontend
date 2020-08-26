import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import AppHeader from "../../components/AppHeader/AppHeader";
import {
  addBeneficiaryDetailAPI,
  getBeneficiariesDetailByIdAPI,
} from "../../services/beneficiaryAPI";
import { routesPath } from "../../routes/routesConfig";
import { ROLES } from "../../utils/constants";
import { registerService } from "../../services/authService";
import AppInput from "../../components/AppInput/AppInput";
import "./beneficiary-detail.scss";
import AppButton from "../../components/AppButton/AppButton";

const BeneficiaryDetail = () => {
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    getBeneficiariesDetailByIdAPI(id)
      .then((response) => {
        const { success, data } = response;
        if (success) {
          if (data.length > 0) {
            const {
              image = "",
              title = "",
              summary = "",
              raised_ammount = "",
              required_ammount = "",
            } = data[0];
            formik.setValues({
              image,
              title,
              summary,
              raisedAmount: raised_ammount,
              requiredAmount: required_ammount,
            });
          }
        }
      })
      .catch((error) => {
        console.log("getBeneficiariesDetailService", error);
      });
  }, []);

  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      summary: "",
      raisedAmount: "",
      requiredAmount: "",
    },
    validationSchema: Yup.object().shape({
      image: Yup.string(),
      title: Yup.string().max(320, "Title is too long").required("Required"),
      summary: Yup.string().max(50000, "Summary is too long"),
      raisedAmount: Yup.number()
        // .max(320, "Raised amount is too long")
        .required("Required"),
      requiredAmount: Yup.string()
        // .max(320, "Required Amount is too long")
        .required("Required"),
    }),
    onSubmit: (values) => {
      const { image, title, summary, raisedAmount, requiredAmount } = values;
      addBeneficiaryDetailAPI({
        userId: id,
        image,
        title,
        summary,
        raisedAmount: parseFloat(raisedAmount),
        requiredAmount: parseFloat(requiredAmount),
      })
        .then((response) => {
          console.log("response.....", response);
        })
        .catch((error) => {
          console.log("error.......", error);
        });
    },
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = formik;

  return (
    <div className="beneficiary-detail-page">
      <AppHeader />
      <h1>
        <span
          className="back-arrow"
          onClick={() => history.push(routesPath.beneficiaries)}
        >
          {"<"}
        </span>
        Beneficiary Detail
      </h1>

      <form className="app-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-field">
          <AppInput
            name="title"
            value={values.title}
            placeholder="Title"
            error={touched.title && errors.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <AppInput
            name="summary"
            type="textarea"
            value={values.summary}
            placeholder="Summary"
            error={touched.summary && errors.summary}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <AppInput
            name="raisedAmount"
            value={values.raisedAmount}
            placeholder="Raised amount"
            error={touched.raisedAmount && errors.raisedAmount}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <AppInput
            name="requiredAmount"
            value={values.requiredAmount}
            placeholder="Required Amount"
            error={touched.requiredAmount && errors.requiredAmount}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <AppButton onClick={handleSubmit}>Submit</AppButton>
        </div>
      </form>
    </div>
  );
};

export default BeneficiaryDetail;
