import { UserContext } from "App";
import { Alert } from "components/alert";
import { AmountForm } from "components/amountForm";
import { CreateAccountLink } from "components/createAccountLink";
import { Card } from "context";
import React, { useContext, useEffect, useState } from "react";

export const Deposit = () => {
  const context = useContext(UserContext);
  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setUser(context.users.find((user) => user.name === context.currentUser));
    console.log(user);
  }, []);

  const validate = (values, prop) => {
    if (prop === "amount") {
      console.log(values.amount);
      if (Number(values.amount) <= 0) {
        console.log(Number(values.amount));
        const message = "Amount must be greater than 0.";
        setError(message);
        return message;
      } else {
        setError(null);
      }
    }
  };
  const handleSubmit = (values) => {
    const newUser = { ...user, balance: user.balance + values.amount };
    context.users = [
      ...context.users.filter((u) => u.name !== user.name),
      newUser,
    ];
    setUser(newUser);
    setSubmitted(true);
  };
  return (
    <div>
      {submitted && <Alert message="Success" type="success" showIcon={true} />}
      {error !== null && (
        <Alert message={error} type="danger" showIcon={true} />
      )}
      <h1>Deposit Page</h1>
      {!user ? (
        <CreateAccountLink />
      ) : (
        <Card
          txtcolor="black"
          header={`Deposit Funds for ${user.name}`}
          body={
            <>
              <dl className="row">
                <dt className="col-sm-3">Balance</dt>
                <dd className="col-sm-9">{user ? user.balance : 0}</dd>
              </dl>
              <AmountForm
                onSubmit={handleSubmit}
                onReset={() => setSubmitted(false)}
                validate={validate}
                buttonText="Deposit"
              />
            </>
          }
        />
      )}
    </div>
  );
};
