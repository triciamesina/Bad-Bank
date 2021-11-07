import React, { createContext } from "react";

const UserContext = createContext(null);

export function Card(props) {
  const classes = () => {
    const bg = props.bgcolor ? "bg-" + props.bgcolor : "";
    const txt = props.txtcolor ? "text-" + props.txtcolor : "text-white";
    const align = props.align ? "text-" + props.align : "";
    return `card mb-3 ${bg} ${txt} ${align} w-75`;
  };

  return (
    <div className={classes()} style={{ width: "18rem" }}>
      {props.header && <div className="card-header">{props.header}</div>}
      <div className="card-body">
        {props.title && <h5 className="card-title">{props.title}</h5>}
        {props.subtitle && (
          <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
        )}
        {props.text && <p className="card-text">{props.text}</p>}
        {props.body}
        {props.status && <div id="createStatus">{props.status}</div>}
      </div>
    </div>
  );
}
