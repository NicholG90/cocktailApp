import React, { useContext, useState } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom'; 
import ChooseACocktail from './chooseacocktail';
import RandomCocktail from "./randomcocktail";
import YourCocktails from "./yourcocktails";
import CocktailSearch from './cocktailsearch';
import Login from './login';
import Home from './home';
import styles from './navigation.module.css'
import { AuthContext } from "./Auth";
import { logOut } from "./base";
import { ReactComponent as CloseMenu } from "./assets/x.svg";
import { ReactComponent as MenuIcon } from "./assets/menu.svg";



function Navigation(props){
    const {currentUser} = useContext(AuthContext);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <BrowserRouter>
        <header className={styles.header}>
            <ul className={click ? styles.navListActive : styles.navList}>
            <li key="1" className={styles.listColour} onClick={closeMobileMenu}>
                <Link to="/">Home</Link>
            </li>
            <li key="2" className={styles.listColour} onClick={closeMobileMenu}>
                <Link to="/randomcocktail">Random Cocktail</Link>
            </li>
            <li key="3" className={styles.listColour} onClick={closeMobileMenu}>
                <Link to="/chooseacocktail">What Should I Make?</Link>
            </li>
            <li key="4" className={styles.listColour} onClick={closeMobileMenu}>
                <Link to="/cocktailsearch">Cocktail Search</Link>
            </li>
            <li key="5" className={styles.listColour} onClick={closeMobileMenu}>
                <Link to="/yourcocktails">Your Cocktails</Link>
            </li>
            <li key="6" className={styles.listColour} onClick={closeMobileMenu}>
                {!!currentUser ? 
                <button onClick={logOut} className={styles.listColour}>Sign Out</button>  :
                <Link to="/login">Login</Link>}
            </li>
            </ul>
            <div onClick={handleClick}>
                {click ? (
                <CloseMenu className={styles.menuIcon} />
                ) : (
                <MenuIcon className={styles.menuIcon} />
                )}
            </div>
        </header>    
        <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/randomcocktail" component={RandomCocktail} />
                <Route exact path="/chooseacocktail" component={ChooseACocktail} />
                <Route exact path="/cocktailsearch" component={CocktailSearch} />
                <Route exact path="/login" component={Login} />
                {!!currentUser ? <Route exact path="/yourcocktails" render={(props) => <YourCocktails key={props.location.key} />}/> :
                <Redirect to={"/login"} />}
            </Switch>
        </main>
        
        <footer><a href={'https://portfolio.gourlay.me'} rel="noopener">Nick Gourlay</a> 2021</footer>

        </BrowserRouter>
    );
}

export default Navigation;