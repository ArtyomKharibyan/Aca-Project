import React, {useState} from "react";
import "./App.css";
import {BrowserRouter, Link, Route, Routes, useNavigate} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/authentication/Login";
import CreatePosts from "./components/CreatePosts";
import {signOut} from "firebase/auth"
import {auth} from "./components/firebase";

function Router() {
    const [isAuth, setIsAuth] = useState(false)
    let navigate = useNavigate();
    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear()
            setIsAuth(false)
            navigate("/login")
        })
    }
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/create">Create Post</Link>
                {!isAuth ? <Link to="/login">Login</Link> : <button onClick={signUserOut}>Log Out</button>}
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/create" element={<CreatePosts/>}/>
                <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
            </Routes>
        </>

    );
};

export default Router;