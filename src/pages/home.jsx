import { Card } from "context";
import React from "react";
import bank from "../images/bank.png";

export const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="py-3 col align-self-center">
        <Card
          txtcolor="black"
          align="center"
          title="Welcome to Bad Bank Website"
          text="You can use this bank"
          body={<img src={bank} className="img-fluid" alt="Bank" />}
        />
      </div>
    </div>
  );
};
