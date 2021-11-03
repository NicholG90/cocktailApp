import React, { useState, useEffect } from "react"
import CocktailDisplay from "./cocktaildisplay";
import CocktailAnimation from './cocktailanimation'
import styles from './randomcocktail.module.css'




function RandomCocktail() {
    const [data, setData] = useState('');
    const [id, setId] = useState(0);
    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
      if (id !== 0) {
        fetchIngredients()
        setIsLoading(true);
      }
      async function fetchIngredients() {
        try {
          const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_COCKTAILDB}/random.php`);
          const apiData = await response.json();
          setData(apiData.drinks[0]);
          setIsLoading(false);
          } catch (err) {
          console.log(err);
      }
      }
    }, [id] );

    const handleClick = (e) => {
      e.preventDefault();
      setId(id + 1)
    }
    if(id === 0)
    return (
      <div>
        <button onClick={handleClick} className={styles.shake}>Shake me up a drink</button>
        <div onClick={handleClick}>
          <CocktailAnimation props={'rocksGlass'}/>
        </div>
      </div>
    )
    if (isLoading === true)
    return (
    <div>
        <button className={styles.shake}>Shake me up a drink</button>
        <CocktailAnimation props={'rocksGlassLoading'}/>
    </div>
    )
    return (
      <div>
            <button onClick={handleClick} className={styles.different}>
              Something Different?
            </button>
            <CocktailDisplay data={data} />
      </div>
    
    );
  }
  
  export default RandomCocktail;