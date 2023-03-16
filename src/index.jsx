import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import { UserAuthContextProvider } from "./context/UserAuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <UserAuthContextProvider>
        <NavBar />
        <Router />
      </UserAuthContextProvider>
    </BrowserRouter>
  </>
);

reportWebVitals();
