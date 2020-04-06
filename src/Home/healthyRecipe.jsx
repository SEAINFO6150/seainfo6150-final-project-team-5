import React from "react";
import { Link } from 'react-router-dom';


const HealthyRecipe = props => {
    return (
        <html>
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </head>
            <div class ="container">
                <img class = "listImage" src={props.HealthyRecipes.img.url} alt="image"/>
                    <p class="name"> {props.HealthyRecipes.title} </p>

                 {/* <button class ="button" */}
                     {/* onClick={()=> alert(props.HealthyRecipes.slug)} >  */}

                     <p class="link"> <Link to={`/item/${props.HealthyRecipes.slug}`}> View Recipe</Link> </p> 
                {/* </button> */}
             
            </div>
        </html>
    );
};

export default HealthyRecipe;