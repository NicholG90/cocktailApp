import React, { useContext } from "react"
import { db } from './base';
import { AuthContext } from "./Auth"
import SaveRedirect from './saveredirect';



function SaveCocktail (props) {
    const data = props.data
    const {currentUser} = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        db.child(currentUser.uid).update({
            [data.idDrink]: data.strDrink
            })
    }

    if (currentUser === null)
    return (
        <SaveRedirect />
    );
    return (
        <button  onClick={handleClick}>Save this Cocktail</button>
    );
}

export default SaveCocktail