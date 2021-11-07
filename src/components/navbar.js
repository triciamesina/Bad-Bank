import React, { useEffect, useState } from "react";
import "./navbar.css";

export function NavBar() {
  const [active, setActive] = useState(null);
  const navItems = [
    {
      link: "createaccount",
      title: "Create Account",
      description: "Open an account in our bank",
    },
    {
      link: "login",
      title: "Login",
      description: "Login to your account",
    },
    {
      link: "deposit",
      title: "Deposit",
      description: "Add Funds to your account",
    },
    {
      link: "withdraw",
      title: "Withdraw",
      description: "Withdraw Funds from your account",
    },
    {
      link: "balance",
      title: "Balance",
      description: "Check your account balance",
    },
    {
      link: "alldata",
      title: "All Data",
      description: "Check all user data",
    },
  ];

  useEffect(() => {
    const location = window.location.hash;
    navItems.forEach((i, index) => {
      if (location.toLowerCase().includes(i.link)) {
        setActive(index);
      }
    });
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" onClick={() => setActive(null)}>
            Bad Bank
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav nav-pills">
              {navItems.map((item, index) => (
                <li
                  className="nav-item"
                  key={index}
                  onClick={() => setActive(index)}
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title={item.description}
                >
                  <a
                    className={
                      index === active ? "nav-link active" : "nav-link"
                    }
                    href={`#/${item.link}/`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
