import React from "react";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from "./IndividualItem.module.css";
import recipe from "../data/Recipes.json";
import { Link } from 'react-router-dom';

const IndividualItem = ({slug}) =>  {
return <div className = {styles.background}> 
  {recipe.map((recipeDetails,index)=>{
  if(recipeDetails.slug == slug){
  return <div>
    <div className = {styles.heading}>
      <h1> {recipeDetails.title}</h1>
    </div>
    
    <div className = {styles.image}>
      <img src={recipeDetails.img.url} alt={recipeDetails.title}/>
    </div>
    <div className = {styles.desc}>
      <h2>{recipeDetails.shortDesc}</h2>
    </div>
    <div>
      <ul className = {styles.summary}>
        <li className = {styles.summaryList}>
          <span className = {styles.summarySpan}>
            <span><b>Total Time:</b></span>
            <span>{recipeDetails.time}</span>
          </span>
        </li>
        <li className = {styles.summaryList}>
          <span className = {styles.summarySpan}> 
            <span><b>Servings:</b></span>
            <span>{recipeDetails.servings}</span>
          </span>
        </li>
      </ul>
    </div>
  <h2 className = {styles.h3Title}>Ingredients</h2>
  <div className = {styles.ingredients}>
      <ul>
        {recipeDetails.ingredients.map(ingredient => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
  </div>
  <p></p>
  <h2 className = {styles.h3Title}>Steps</h2>
  <p></p>
  <div className = {styles.steps}>
      <ul>
        {recipeDetails.recipe.map(recipe => (
          <li key={recipe}>{recipe}</li>
        ))}
      </ul>
  </div>
  </div>
}
})}
</div>

}

IndividualItem.propTypes = {
  recipeDetails: PropTypes.object.isRequired
  };
export default IndividualItem;