import { UserContext } from "App";
import { Alert } from "components/alert";
import { CreateAccountForm } from "components/createAccountForm";
import { Card } from "context";
import React, { useContext, useState } from "react";

export const CreateAccount = () => {
  const [submitted, setSubmitted] = useState(false);
  const context = useContext(UserContext);

  const handleCreate = (values) => {
    context.users.push({
      name: values.name,
      email: values.email,
      password: values.password,
      balance: 100,
    });
    setSubmitted(true);
  };

  const clearForm = () => {
    setSubmitted(false);
  };

  return (
    <div>
      {submitted && <Alert message="Success" type="success" showIcon={true} />}
      <h1>Create Account Page</h1>
      <Card
        txtcolor="black"
        header="Create your account"
        body={<CreateAccountForm onSubmit={handleCreate} onReset={clearForm} />}
      />
    </div>
  );
};
