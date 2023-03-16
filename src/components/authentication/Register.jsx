import React from "react";
import GoogleAuth from "./GoogleAuth";
import SignUp from "./SignUp";

function Register() {
  return (
    <div className="signUp">
      <div className="authentication">
        <GoogleAuth />
        <SignUp />
      </div>
    </div>
  );
}

export default Register;
