import React, { Fragment } from "react";
import SaveCocktail from "./savecocktail";
import InstructionsModal from "./instructionsmodal";
import styles from './cocktaildisplay.module.css'

function CocktailDisplay (props) {
    const data = props.data;

    const ingredients = Object.keys(data).reduce((result, key) => {
        if (key.includes('strIngredient')) {
          result[key] = data[key];
        }
        return result;
      }, {});
    
    function cleanIngredients(obj) {
      for (var propName in obj) { 
        if (obj[propName] === null || obj[propName] === undefined) {
          delete obj[propName];
        }
      }
    }

    cleanIngredients(ingredients);

    const parsedIngredients = Object.entries(ingredients).map(([key, value]) => {
      return (
              {ingredient: value}
        );
  })

    const measures = Object.keys(data).reduce((result, key) => {
        if (key.includes('strMeasure')) {
          result[key] = data[key];
        }
        return result;
      }, {});

    function cleanMeasures(obj) {
      for (var propName in obj) { 
        if (obj[propName] === null || obj[propName] === undefined) {
          delete obj[propName];
        }
      }
    }

    cleanMeasures(measures);

    const parsedMeasures = Object.entries(measures).map(([key, value]) => {
        return (
                {measure: value}
          );
    })

    let combinedIngredients = parsedIngredients.map((item, i) => Object.assign({}, item, parsedMeasures[i]));
    
    return (
      <Fragment >
        <h2 className={styles.cocktailName}>{data.strDrink}</h2>
        <div>
        <img className={styles.cocktailImage} src={data.strDrinkThumb} alt={data.strDrink} width="300" height="300"/> 
          <div className={styles.instructions}>
            <InstructionsModal instructions={data.strInstructions} ingredients={combinedIngredients}/>
            <SaveCocktail data={data} />
          </div>
        </div>
      </Fragment>
      );
}

export default CocktailDisplay;