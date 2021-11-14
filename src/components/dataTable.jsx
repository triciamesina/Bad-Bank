import React, { useEffect, useState } from "react";

export const DataTable = ({ data }) => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    setRows(data);
  }, [data]);
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
        </tr>
      </thead>
      <tbody>
        {rows.length > 0 &&
          rows.map((row, index) => {
            console.log("rendering rows: ", row);
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.password}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
