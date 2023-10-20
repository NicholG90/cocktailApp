import React, { useContext } from "react";
import { signInWithGoogle, signInWithTwitter, signInWithFacebook } from "./base";
import { AuthContext } from "./Auth.js";
import { Navigate } from 'react-router-dom';
import { FacebookLoginButton, GoogleLoginButton, TwitterLoginButton } from "react-social-login-buttons";
import styles from './login.module.css';


function Login() {

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Navigate to="/yourcocktails" />;
  }

  return (
    <div className={styles.loginButtons}>
      <GoogleLoginButton onClick={signInWithGoogle} />
      <FacebookLoginButton onClick={signInWithFacebook} />
      <TwitterLoginButton onClick={signInWithTwitter} />
    </div>
  );
}

export default Login;
