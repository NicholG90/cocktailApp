import React, { useState, useEffect } from "react"
import AlcoholSelector from './alcoholselector';
  
function ChooseACocktail() {
    const [ingredientList, setIngredientList] = useState([]);
    const [token, setToken] = useState('');
  
    useEffect(() => {
      async function fetchIngredients() {
        try {
          const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_COCKTAILDB}/list.php?i=list`);
          const apiData = await response.json();
  
          setIngredientList(apiData.drinks.map(opt => ({ label: opt.strIngredient1, value: opt.strIngredient1 })) );
          } catch (err) {
          console.log(err);
      }
      }
      if (!token) {
        fetchIngredients();
      }
    }, []);
  
  
    return (
      <div>
          <AlcoholSelector data={ingredientList}/>
      </div>
    );
  }
  
  export default ChooseACocktail;
  

