import React, { useContext, useEffect, useState } from "react";
import { db } from './base';
import { AuthContext } from "./Auth";
import CocktailDisplay from './cocktaildisplay'
import styles from './yourcocktails.module.css'
import DeleteCocktail from './deletecocktail'


function YourCocktails() {
  const [isLoading, setIsLoading] = useState(true);
  const [listItems, setListItems] = useState(null);
  const [isClicked, setIsClicked] = useState(false)
  const [data, setData] = useState('');
  const tempuser = useContext(AuthContext)
  const uid = tempuser.currentUser.uid

  useEffect(() => {
    db.child(uid).on('value', (snapshot) => {
      setData(snapshot.val());
      setIsLoading(false)
      if (data === null)
        setListItems(
        <h2>Save some Cocktails!</h2>
      )
      else 
      setListItems(Object.entries(data).map(([key,value]) =>
      <li className={styles.cocktailList}><button onClick={(e) => handleClick(key, e)} className={styles.clickCocktail}>{value}</button><button onClick={(e) => deleteClick(e)}><DeleteCocktail data={key}/></button>
      </li>
      ));
    })
  }, [isLoading])

  const deleteClick = (e) => {
    e.preventDefault();
    setIsLoading(true);
  }

  const handleClick = (key, e) =>  {
    e.preventDefault();
    listingInformation(key)
    setIsClicked(true)
  }

  async function listingInformation(key) {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_COCKTAILDB}/lookup.php?i=${key}`);
        const apiData = await response.json();
        setData(apiData.drinks[0]);
    } catch (err) {
    console.log(err);
}
}

    return (
      <div>
        {(isClicked === false) 
        ?
        <ul>
          {listItems}
        </ul>
        : 
        <CocktailDisplay data={data} />}
      </div>
    );
  }
  
export default YourCocktails;