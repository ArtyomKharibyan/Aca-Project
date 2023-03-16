import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/authentication/Register";
import CreatePosts from "./components/CreatePosts";
import SignIn from "./components/authentication/SignIn";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreatePosts />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<SignIn />} />
    </Routes>
  );
}

export default Router;
