import { useFormik } from "formik";
import React, { useEffect, useState } from "react";

export const CreateAccountForm = ({ onSubmit, onReset }) => {
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    onSubmit(values);
    setSubmitted(true);
    setEnableSubmit(false);
  };

  const handleReset = () => {
    formik.resetForm(formik.initialValues);
    setSubmitted(false);
    onReset();
  };

  const validateForm = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.name || values.name === " ") {
      errors.name = "Name is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters long.";
    }
    return errors;
  };

  const showError = (value) => {
    return formik.errors[value] && formik.touched[value];
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validate: validateForm,
  });

  useEffect(() => {
    if (
      formik.values.name !== "" &&
      formik.values.email !== "" &&
      formik.values.password !== ""
    ) {
      setEnableSubmit(true);
      return;
    }
    setEnableSubmit(false);
  }, [formik.values]);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="needs-validation"
      noValidate
    >
      <div className="form-group">
        <label htmlFor="form-name">Name</label>
        <input
          className={
            `form-control ` +
            (showError("name")
              ? "is-invalid"
              : formik.touched.name
              ? "is-valid"
              : "")
          }
          type="text"
          name="name"
          id="form-name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          disabled={submitted}
        />
        {showError("name") ? (
          <div className="text-danger">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="form-email">Email Address</label>
        <input
          className={
            `form-control ` +
            (showError("email")
              ? "is-invalid"
              : formik.touched.email
              ? "is-valid"
              : "")
          }
          type="email"
          name="email"
          id="form-email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          disabled={submitted}
        />
        {showError("email") ? (
          <div className="text-danger">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="form-group">
        <label htmlFor="form-password">Password</label>
        <input
          className={
            `form-control ` +
            (showError("password")
              ? "is-invalid"
              : formik.touched.password
              ? "is-valid"
              : "")
          }
          type="password"
          name="password"
          id="form-password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          disabled={submitted}
        />
        {showError("password") && (
          <div className="text-danger">{formik.errors.password}</div>
        )}
      </div>
      <br />
      <button
        type="submit"
        id="form-submit"
        className="btn btn-primary"
        disabled={!enableSubmit || submitted}
      >
        Create
      </button>
      {submitted && (
        <button
          type="reset"
          disabled={!submitted}
          className="btn btn-light"
          onClick={handleReset}
        >
          Add Another Account
        </button>
      )}
    </form>
  );
};
