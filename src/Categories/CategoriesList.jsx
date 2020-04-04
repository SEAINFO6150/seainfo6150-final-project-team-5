import React from "react";
import PropTypes from 'prop-types';

import styles from "./CategoriesList.module.css";

import ListItem from "./ListItem.jsx";


const CategoriesList = props => {
    return (
        <div className={styles.container}>
            {props.recipes.map(recipe => ( 
              <ListItem recipe={recipe} selCat={props.selectedCategory} />
            ))}            
        </div>
    )
}

CategoriesList.propTypes = {
    recipes: PropTypes.array.isRequired,
    selectedCategory: PropTypes.string.isRequired
};

export default CategoriesList;
