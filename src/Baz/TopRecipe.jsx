import React from "react";
import { Link } from 'react-router-dom';
import styles from "./Aboutus.module.css";

const TopRecipe = props => {
    return (
        <html>
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </head>
            <div class={styles.recipes}>
                <img src={props.TopRecipes.img.url} alt="image"/>
                <p> {props.TopRecipes.title}</p>
                <Link class={styles.link} to={`/item/${props.TopRecipes.slug}`}>View Recipe</Link> 
            </div>
        </html>
    );
};

export default TopRecipe;