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
                {/* <div class = "buttonDiv">  */}
                <img class = "listImage" src={props.mustTryRecipes.img.url} alt="image"/>

                 {/* <button class ="button" */}
                     {/* onClick={()=> alert(props.mustTryRecipes.slug)} >  */}
                     <p class="name"> {props.mustTryRecipes.title} </p>
                     <p> <Link to={`/item/${props.mustTryRecipes.slug}`}>View Recipe</Link></p>
                {/* </button> */}
                {/* </div> */}
                {/* <div>
                </div> */}
            </div>
        </html>
    );
};

export default RecipeCaller;