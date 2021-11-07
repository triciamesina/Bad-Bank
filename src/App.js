import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Route } from "react-router-dom";
import React, { createContext } from "react";
import { NavBar } from "components/navbar";
import { Deposit } from "pages/deposit";
import { Withdraw } from "pages/withdraw";
import { Balance } from "pages/balance";
import { AllData } from "pages/alldata";
import { Login } from "pages/login";
import { CreateAccount } from "pages/createaccount";
import { Home } from "pages/home";

export const UserContext = createContext(null);

function App() {
  return (
    <>
      <UserContext.Provider value={{ users: ["trish"] }}>
        <HashRouter>
          <div className="container-fluid">
            <NavBar />
            <div className="col-lg-8 mx-auto p-5 py-md-5">
              <div className="py-5">
                <Route path="/" exact component={Home} />
                <Route path="/createaccount/" component={CreateAccount} />
                <Route path="/login/" component={Login} />
                <Route path="/deposit/" component={Deposit} />
                <Route path="/withdraw/" component={Withdraw} />
                <Route path="/balance/" component={Balance} />
                <Route path="/alldata/" component={AllData} />
              </div>
            </div>
          </div>
        </HashRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
