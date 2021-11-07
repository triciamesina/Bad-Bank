import { useFormik } from "formik";
import React, { useEffect, useState } from "react";

export const AmountForm = ({ onSubmit, onReset, validate, buttonText }) => {
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const initialValues = {
    amount: 0,
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
    Object.keys(values).forEach((prop) => {
      const error = validate(values, prop);
      if (error) {
        errors[prop] = error;
      }
    });
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
    if (formik.values.amount !== 0) {
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
        <label htmlFor="form-amount">Deposit Amount</label>
        <input
          className={
            `form-control ` +
            (showError("amount")
              ? "is-invalid"
              : formik.touched.amount
              ? "is-valid"
              : "")
          }
          type="number"
          name="amount"
          id="form-amount"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.amount}
          disabled={submitted}
        />
        {showError("amount") ? (
          <div className="text-danger">{formik.errors.amount}</div>
        ) : null}
      </div>
      <br />
      <button
        type="submit"
        id="form-submit"
        className="btn btn-primary"
        disabled={!enableSubmit || submitted}
      >
        {buttonText}
      </button>
      {submitted && (
        <button
          type="reset"
          disabled={!submitted}
          className="btn btn-light"
          onClick={handleReset}
        >
          Clear
        </button>
      )}
    </form>
  );
};
