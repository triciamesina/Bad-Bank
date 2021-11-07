import { Card } from "context";
import React from "react";

export const CreateAccountLink = () => {
  return (
    <Card
      txtcolor="black"
      header="User not found!"
      body={
        <div>
          Please create an account in the{" "}
          <a href="#/createaccount/">Create Account</a> page.
        </div>
      }
    />
  );
};
