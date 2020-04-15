import React from "react";
import PropTypes from 'prop-types';

import styles from "./CategoriesList.module.css";

import ListItem from "./ListItem.jsx";


const CategoriesList = props => {
    return (
        <html>
            <div className={styles.mainContainer}>
                <div className={styles.categoryTitle}>
                    <h3>{props.selectedCategory}</h3>
                </div>

                <div className={styles.container}>
                    {props.recipes.map(recipe => ( 
                    <ListItem recipe={recipe} selCat={props.selectedCategory} />
                    ))}            
                </div>
                <div class="footer">
                    <a href="/ShareFeedback" class="link"> Share Your Feedback  </a>
                    <a href="/Baz/Baz" class="link">About Us   </a>
                    <a href="GetInTouch/GetInTouch" class="link"> Get Featured   </a>  
                </div>
            </div>
        </html>
    )
}

CategoriesList.propTypes = {
    recipes: PropTypes.array.isRequired,
    selectedCategory: PropTypes.string.isRequired
};

export default CategoriesList;
