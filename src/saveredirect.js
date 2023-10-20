import React from "react";
import { useNavigate } from "react-router-dom";
import styles from './saveredirect.module.css';

function SaveRedirect() {
  const navigate = useNavigate();

  function handleRedirect() {
    navigate('/home');
  }

  return (
    <button onClick={handleRedirect} className={styles.login}>Login to Save Cocktail</button>
  );
}

export default SaveRedirect;