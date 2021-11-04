import React, { useState } from "react"
import CocktailDisplay from "./cocktaildisplay";
import CocktailAnimation from './cocktailanimation'
import styles from './cocktailsearch.module.css'


function CocktailSearch() {
    const [data, setData] = useState('');
    const [query, setQuery] = useState('');
    const [isSearched, setIsSearched] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [isResults, setIsResults] = useState(true)



    async function fetchCocktails() {
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
        const apiData = await response.json();
        setData(apiData.drinks[0]);
        setIsResults(true)
        setIsLoading(false);
        } catch (err) {
        setIsResults(false)
        setIsLoading(false)
        setIsSearched(false)
        console.log(err);
    }
    }    

    const handleSubmit = (e) => {
      e.preventDefault();
      fetchCocktails();
      setIsSearched(true)
      setIsLoading(true)
    }

    if (isLoading === true)
    return (
    <div>
        <header>
            <CocktailAnimation props={'rocksGlassLoading'}/>
        </header>
    </div>
    )
    return (
        <div>
          <form onSubmit={handleSubmit} className={styles.form}>
              <input
                placeholder="Search for a cocktail"
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                className={styles.textInput}
              />
              <input
                type='submit' value='search'
                className={styles.submit}
              />
          </form>
        <div>
        {(isSearched === true) && <CocktailDisplay data={data} />}
        </div>
        <div>
        {(isResults === false) && <h2>Couldn't find anything with those results</h2> }
        </div>
        </div>
      )
      

}
export default CocktailSearch