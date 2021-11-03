import React, { useContext } from "react"
import { db } from './base';
import { AuthContext } from "./Auth"
import styles from './yourcocktails.module.css'




function DeleteCocktail (props) {
    const key = props.data
    const {currentUser} = useContext(AuthContext);


    const handleClick = (e) => {
        e.preventDefault();
        db.child(currentUser.uid).child(key).remove()
    }
    return (
        <button  onClick={handleClick} className={styles.deleteCocktail}>Delete cocktail</button>
    );
}

export default DeleteCocktail