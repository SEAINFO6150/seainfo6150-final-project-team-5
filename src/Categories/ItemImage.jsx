import React from "react";
import PropTypes from "prop-types";
import styles from "./ItemImage.module.css";

const ItemImage = props => {
    return (
        <div><img class={styles.itemImage} src={props.url} alt="item image" /></div>
    );
};

ItemImage.propTypes = {
    url : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired
};

export default ItemImage;