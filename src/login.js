import React, { useContext } from "react";
import { signInWithGoogle } from "./base";
import { AuthContext } from "./Auth.js";
import { Redirect } from 'react-router-dom'; 


function Login() {

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/yourcocktails" />;
  }

  return (
      <div className="login-buttons">
        <button className="login-provider-button" onClick={signInWithGoogle}>
        <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
        <span> Continue with Google</span>
       </button>
      </div>
  )
}

export default Login
