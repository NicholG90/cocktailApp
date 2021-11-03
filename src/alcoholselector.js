import React, { Component } from 'react';
import Select from 'react-select';
import './alcoholselector.css';
import CocktailResult from './cocktailresult';
import styles from  "./alcoholselector.module.css"
  

class AlocoholSelector extends Component {
    state = {
    selectedOption: null,
    }
    
    handleChange = selectedOption => {
    this.setState(
        { selectedOption },
    );
    };

    
    render() {
    const { selectedOption } = this.state;
    const options = this.props.data

    if(selectedOption !== null) 
    return (
        <div className="search">
        <Select className="test"
        value={selectedOption}
        isMulti
        onChange={this.handleChange}
        options={options}
        />
        <CocktailResult data={selectedOption} />
        </div>
    );
    return (
        <div className="search">
        <Select className="test"
        isMulti
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        />
        <h3 className={styles.ingredientsdirection}>Select some ingredients!</h3>
        </div>
    )
    }
}
export default AlocoholSelector;


