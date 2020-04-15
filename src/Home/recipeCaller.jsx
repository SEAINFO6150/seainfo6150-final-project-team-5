import React from "react";
import styles from "./recipeCaller.css";
import { Link } from 'react-router-dom';


const RecipeCaller = props => {
    return (
        <html>
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </head>            
            <div class ="container">
                <img class="listImage" src={props.mustTryRecipes.img.url} alt="image"/>
                <h3 class="name"> {props.mustTryRecipes.title} </h3>
                <p class="recipes"> <Link class ="recipeLink" to={`/item/${props.mustTryRecipes.slug}`}>View Recipe ></Link></p>
            </div>
        </html>
    );
};

export default RecipeCaller;