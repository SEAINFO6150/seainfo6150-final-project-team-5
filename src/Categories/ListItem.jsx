import React from "react";
import PropTypes from 'prop-types';
import styles from "./ListItem.module.css";

import ItemImage from "./ItemImage.jsx";
import ItemDetailButton from "./ItemDetailButton.jsx";

const ListItem = props => {
    let isMatch = props.selCat == (props.recipe.category)

    if(isMatch)
    {
        return (
            <div className={styles.container}>
                <div>
    			    <ItemImage url={props.recipe.img.url} title={props.recipe.title} />
		        </div>

                <div id={styles.content}>
                    <h2>{props.recipe.title}</h2>
                    <p>{props.recipe.shortDesc}</p>
                    <p>
				        <ItemDetailButton recipe={props.recipe}/>
			        </p>
                </div>    
            </div>
        )
    }

    return null
}

ListItem.propTypes = {
    recipe: PropTypes.array.isRequired,
    selectedCategory: PropTypes.string.isRequired
};

export default ListItem;