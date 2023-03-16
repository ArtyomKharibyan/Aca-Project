import React from "react";
import GoogleAuth from "./GoogleAuth";
import SignUp from "./SignUp";
import {UserAuthContextProvider} from "../../context/UserAuthContext";

function Login({setIsAuth}) {

    return (
        <UserAuthContextProvider>
            <GoogleAuth setIsAuth={setIsAuth}/>
            <SignUp/>
        </UserAuthContextProvider>
    )
}

export default Login