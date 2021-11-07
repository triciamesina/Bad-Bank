import { UserContext } from "App";
import React, { useContext } from "react";

export const AllData = () => {
  const context = useContext(UserContext);
  return (
    <div>
      <h1>All Data Page</h1>
      <p>{JSON.stringify(context.users)}</p>
    </div>
  );
};
