import React from "react";
import PropTypes from "prop-types";
import styles from "./ItemDetailButton.module.css";

const ItemDetailButton = props => {
  return (
    <button
      className={styles.slugButton}
      onClick={() => alert(props.recipe.ingredients)}
    >
      View Recipe >
    </button>
  );
};

ItemDetailButton.propTypes = {
  recipe: PropTypes.object.isRequired
};

export default ItemDetailButton;
