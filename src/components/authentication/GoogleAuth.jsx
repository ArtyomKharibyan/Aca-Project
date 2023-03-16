import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import { Button } from "@mui/material";

function GoogleAuth() {
  const { setIsAuth } = useUserAuth();
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem = ("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div className="loginPage">
      <h2 className="mb-3">Firebase Auth Signup</h2>
      <button
        style={{ marginBottom: "30px" }}
        onClick={signInWithGoogle}
        className="login-with-google-btn"
      >
        SigIn With Google
      </button>
    </div>
  );
}

export default GoogleAuth;
