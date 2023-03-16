import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserAuthContextProvider,
  useUserAuth,
} from "../context/UserAuthContext";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const NavBar = () => {
  let navigate = useNavigate();
  const { isAuth, setIsAuth } = useUserAuth();
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/create">Create Post</Link>
      {!isAuth ? (
        <Link to="/register">Register</Link>
      ) : (
        <button onClick={signUserOut}>Log Out</button>
      )}
    </nav>
  );
};

export default NavBar;
