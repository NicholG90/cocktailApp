import React, { useState, useEffect } from "react";
import CocktailDisplay from "./cocktaildisplay";
import CocktailAnimation from './cocktailanimation';

function CocktailResult(props) {
    const [data, setData] = useState([]);
    const [cocktailId, setCocktailId] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const query = props.data;


    const parts = [];
    for (var i = 0; i < query.length; ++i)
        parts.push(encodeURIComponent(query[i].value));
    const url = parts.join(',');

    useEffect(() => {
        if (query !== undefined) {
            fetchIngredients();
        } else {
            console.log('no selection');
        }
        async function fetchIngredients() {
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/${process.env.REACT_APP_COCKTAILDB}/filter.php?i=${url}`);
                const apiData = await response.json();
                const drinks = apiData.drinks;
                const randint = Math.floor(Math.random() * drinks.length);
                setCocktailId(apiData.drinks[randint].idDrink);
                setIsLoading(true);
            } catch (err) {
                console.log(err);
            }
        }
    }, [query, url]);


    useEffect(() => {
        if (cocktailId && cocktailId.length > 0) {
            listingInformation();
        } else {
            setIsLoading(false);
        }
        async function listingInformation() {
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${cocktailId}`);
                const apiData = await response.json();
                setIsLoading(false);
                setData(apiData.drinks[0]);
            } catch (err) {
                console.log(err);
            }
        }
    }, [cocktailId]);


    if (isLoading === true)
        return (
            <div>
                <header>
                    <CocktailAnimation props={'rocksGlassLoading'} />
                </header>
            </div>
        );
    return (
        <div>
            {(cocktailId === undefined) ? <h2>Couldn't find anything with those ingrdients</h2> : <CocktailDisplay data={data} />}
        </div>
    );
}

export default CocktailResult;
