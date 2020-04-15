import React from 'react'
import PropTypes from 'prop-types';
import styles from "./Aboutus.module.css";
import TopRecipe from "./TopRecipe.jsx";

const Baz = props => {
    return (
        <div className={styles.container}>
            <div className={styles.row1}>
                <img src="/images/Food3.jpg"></img>
                <p>Welcome to Foodwali. This is a place where we share our passion of traditional food with the world which is widely appreciated for its fabulous use of herbs and spice. Indian cuisine is known for its large assortment of dishes. The cooking style varies from region to region and is largely divided into South Indian & North Indian cuisine. If you have any questions, feel free to contact us or take a look at our philosophy. Have a healthy day everyone!</p>
            </div>
            <div className={styles.row2}>
                <h1>Meet the team</h1>
                <div class={styles.team}>
                    <img src="/Members/Ramya.jpg"></img>
                    <p>Ramya Hebbar</p>
                </div>
                <div class={styles.team}>
                    <img src="/Members/Megha.jpg"></img>
                    <p>Megha Bhattad</p>
                </div>
                <div class={styles.team}>
                    <img src="/Members/Bharathi.jpg"></img>
                    <p>Bharathi Madhu</p>
                </div>
                <div class={styles.team}>
                    <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/49853227_2110539542366555_2922309204330938368_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_oc=AQm6VKQPbxkadj0AQxjOYlFTqrZykV3b6Xko5L1f9Xj3n95rXuq_7DDDdrfdvvQgGSY4qzNl6TrvVSZSYb-AJ1EO&_nc_ht=scontent-sea1-1.xx&oh=75f76b5c2f68f06dff50e5e775854614&oe=5EAC36FB"></img>
                    <p>Angika Singh</p>
                </div>
            </div>
            <h1>Our current favourites</h1>
            <div className={styles.row3}>
            {props.TopRecipes.map(recipe => (
                    <li key={recipe.slug}>
                        <TopRecipe TopRecipes={recipe}></TopRecipe>
                    </li>
            ))}            
            </div>
            <div className={styles.row4}>
            <a href = '/ShareFeedback'>Share Your Feedback</a>
            <a href = '/GetInTouch/GetInTouch'>Get Featured</a>
            </div>
        </div>
    )
}

Baz.propTypes = {
    TopRecipes: PropTypes.array.isRequired	
};

export default Baz
