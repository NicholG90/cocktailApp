import React  from "react"
import { useHistory } from "react-router-dom";
import styles from './saveredirect.module.css'

function SaveRedirect() {
  const history = useHistory();

  function handleRedirect() {
    history.push("/home");
  }

  return (
    <button onClick={handleRedirect} className={styles.login}>Login to Save Cocktail</button>
  );
}

export default SaveRedirect