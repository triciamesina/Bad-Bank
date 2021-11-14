import { UserContext } from "App";
import { Alert } from "components/alert";
import { LoginForm } from "components/loginForm";
import { Card } from "context";
import React, { useContext, useEffect, useState } from "react";

export const Login = () => {
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [clearForm, setClearForm] = useState(true);
  const context = useContext(UserContext);

  useEffect(() => {
    if (context.currentUser !== null && context.currentUser !== "") {
      setSuccess(true);
    }
  }, [context]);

  const handleLogin = (values) => {
    setClearForm(false);
    const user = context.users.find(
      (u) =>
        u.email.toLowerCase() === values.email.toLowerCase() &&
        u.password === values.password
    );
    if (!user) {
      context.currentUser = "";
      setSuccess(false);
      setSubmitted(true);
      setClearForm(true);
    } else {
      context.currentUser = values.name;
      setSuccess(true);
      setSubmitted(true);
    }
    console.log(`user added. context : ${context.users}`);
  };

  const handleLogout = () => {
    context.currentUser = "";
    setSuccess(false);
    setSubmitted(false);
    setShowLogout(true);
  };

  const isUserLoggedIn = () => {
    return context.currentUser !== null && context.currentUser !== "";
  };

  return (
    <div>
      {submitted && success === true ? (
        <Alert message="Login successful!" type="success" showIcon={true} />
      ) : (
        submitted && (
          <Alert message="Login failed!" type="danger" showIcon={true} />
        )
      )}
      {showLogout && (
        <Alert message="Logout successful!" type="success" showIcon={true} />
      )}
      <h1>Login Page</h1>
      {success === true ? (
        <Card
          txtcolor="black"
          header={`Hi ${context.currentUser}`}
          body={
            <button
              type="button"
              id="logout"
              className="btn btn-primary"
              onClick={handleLogout}
            >
              Logout
            </button>
          }
        />
      ) : (
        <Card
          txtcolor="black"
          header="Login to your account"
          body={<LoginForm onSubmit={handleLogin} clearForm={clearForm} />}
        />
      )}
    </div>
  );
};
