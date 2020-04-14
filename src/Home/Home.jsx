  import React from "react";
import PropTypes from 'prop-types';
import RecipeCaller from "./recipeCaller.jsx";
import HealthyRecipe from "./healthyRecipe.jsx";
import styles from "./Home.css";


const Home = props => {
    return (
      <html> 
      <head> 
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
    
        <div id="headContainer">
          <img class ="homeImage" src="/images/Food2.jpg" alt="Food"/>
          <p class="SubText"> Must try recipes </p>
          <div className={styles.container}>
            <ul class="subCategory">                 
              {props.mustTryRecipes.map(mustTryRecipes => (
                  <li key={mustTryRecipes.slug}>
                    <RecipeCaller mustTryRecipes={mustTryRecipes}></RecipeCaller>
                  </li>
                ))}
            </ul>
          </div>
          <p class="SubText"> Healthy recipes </p> 
          <div className={styles.container}>
            <ul class="subCategory">
              {props.HealthyRecipes.map(HealthyRecipes =>(
                <li key={HealthyRecipes.slug}>
                  <HealthyRecipe HealthyRecipes={HealthyRecipes}></HealthyRecipe>
                </li>
              ))}
            </ul>
          </div>
          <div class="footer">
            <a href="/ShareFeedback" class="link"> Share your feedback  </a>
            <a href="/Baz/Baz" class="link">About us   </a>
            <a href="GetInTouch/GetInTouch" class="link"> Get featured   </a>  
          </div>
        </div>
      </html>
    )
  }

Home.propTypes = {
    mustTryRecipes: PropTypes.array.isRequired
};

Home.propTypes = {
  HealthyRecipes: PropTypes.array.isRequired
};

export default Home;
