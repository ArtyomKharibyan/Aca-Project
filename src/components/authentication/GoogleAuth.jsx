import React from "react";
import {auth, provider} from "../firebase";
import {signInWithPopup} from "firebase/auth"
import {useNavigate} from "react-router-dom"

function GoogleAuth({setIsAuth}) {
    let navigate = useNavigate()
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem = ("isAuth", true)
            setIsAuth(true)
            navigate("/")
        })
    }
    return (
        <div className="loginPage">
            <p>Sign In With Google to Continue</p>
            <button onClick={signInWithGoogle} className="login-with-google-btn">SigIn With Google</button>
        </div>
    )
}

export default GoogleAuth