import React from "react";
import GoogleAuth from "./GoogleAuth";
import SignUp from "./SignUp";
import {UserAuthContextProvider} from "../../context/UserAuthContext";

function Login({setIsAuth}) {

    return (
        <UserAuthContextProvider>
            <div className="signup">
                <SignUp />
            </div>
            <GoogleAuth setIsAuth={setIsAuth}/>
        </UserAuthContextProvider>
    )
}

export default Login