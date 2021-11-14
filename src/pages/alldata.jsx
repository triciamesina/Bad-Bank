import { UserContext } from "App";
import { DataTable } from "components/dataTable";
import { Card } from "context";
import React, { useContext } from "react";

export const AllData = () => {
  const context = useContext(UserContext);
  console.log(context.users);
  return (
    <div>
      <h1>All Data Page</h1>
      <Card body={<DataTable data={context.users} />} />
    </div>
  );
};
