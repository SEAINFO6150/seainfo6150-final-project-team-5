import React from "react";
import PropTypes from "prop-types";
import styles from "./ItemDetailButton.module.css";
import IndividualItem from "../IndividualItem/IndividualItem";


const ItemDetailButton = props => {
  return (
    <button
      className={styles.slugButton}
      onClick={() => alert(props.recipe.ingredients)}
      // onClick={() => <IndividualItem recipeDetails ={props.recipe} />}
    >
      View Recipe >
    </button>
  );
};

ItemDetailButton.propTypes = {
  recipe: PropTypes.object.isRequired
};

export default ItemDetailButton;
