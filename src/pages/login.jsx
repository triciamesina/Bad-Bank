import { UserContext } from "App";
import { Alert } from "components/alert";
import { LoginForm } from "components/loginForm";
import { Card } from "context";
import React, { useContext, useEffect, useState } from "react";

export const Login = () => {
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const context = useContext(UserContext);

  useEffect(() => {
    if (context.currentUser !== null && context.currentUser !== "") {
      setSuccess(true);
      setSubmitted(true);
    }
  }, [context]);

  const handleLogin = (values) => {
    const user = context.users.find(
      (u) =>
        u.email.toLowerCase() === values.email.toLowerCase() &&
        u.password === values.password
    );
    if (!user) {
      context.currentUser = "";
      setSuccess(false);
      setSubmitted(true);
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
  };

  const isUserLoggedIn = () => {
    return context.currentUser !== null && context.currentUser !== "";
  };

  return (
    <div>
      {submitted && <Alert message="Success" type="success" showIcon={true} />}
      {submitted && success === false && (
        <Alert message="Failed!" type="danger" showIcon={true} />
      )}
      <h1>Login Page</h1>
      {submitted && success === true ? (
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
          body={<LoginForm onSubmit={handleLogin} />}
        />
      )}
    </div>
  );
};
