import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "./App.css";
// import recipes from "./data/Recipes.json";
import mustTryRecipes from "./data/MustTryRecipes.json";
import HealthyRecipes from "./data/HealthyRecipes.json";
import TopRecipes from "./data/TopRecipes.json";

import Home from "./Home/Home.jsx";
import Foo from "./Foo/Foo.jsx";
import Bar from "./Bar/Bar.jsx";
import Baz from "./Baz/Baz.jsx";
import Error from "./Error/Error.jsx";
import GetInTouch from "./GetInTouch/GetInTouch.jsx";
import IndividualItem from "./IndividualItem/IndividualItem.jsx";
import Feedback from "./Feedback/Feedback.jsx";

import recipes from "./data/Recipes.json";

import CategoriesList from "./Categories/CategoriesList.jsx";
// import IndividualItem from "./IndividualItem/IndividualItem.jsx";

// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
const externalContent = {
  id: "article-1",
  title: "An Article",
  author: "April Bingham",
  text: "Some text in the article"
};

function App() {
  return (
    <Router>
      <header>
        <div id="titleDiv">
          <h1 align = "center" class="hometitle"> Foodwali </h1>
        </div>
      <div class="navbar">
        <a href="/">Home</a>
        <div class="dropdown">
          <button class="dropbtn">Category 
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="/categories/Breakfast">Breakfast</a>
            <a href="/categories/Lunch">Lunch</a>
            <a href="/categories/Dinner">Dinner</a>
            <a href="/categories/Dessert">Dessert</a>
          </div>
        </div> 
        <a href="/Baz/Baz">About Us</a>
        <a href="/GetInTouch/GetInTouch">Get featured</a>
      </div>
      </header>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path = "/" 
         exact
         render={() => <Home mustTryRecipes={mustTryRecipes} HealthyRecipes={HealthyRecipes}/>}
       />
        
        <Route path="/GetInTouch/GetInTouch" exact component={GetInTouch} />
        <Route path="/ShareFeedback" exact component={Feedback} />
        <Route path="/Baz/Baz" exact render={() => <Baz TopRecipes={TopRecipes}/>} />
        <Route path="/categories/:selectedCategory"
         exact
         render={({match}) => (
           <CategoriesList recipes={recipes} selectedCategory={match.params.selectedCategory}/>
         )}
        />
        {/* passing parameters via a route path */}
        <Route
          path="/bar/:categoryId/:productId"
          exact
          render={({ match }) => (
            // getting the parameters from the url and passing
            // down to the component as props
            <Bar
              categoryId={match.params.categoryId}
              productId={match.params.productId}
            />
          )}
        />
         <Route
          path="/item/:slug"
          exact
          render={({ match }) => (
            // getting the parameters from the url and passing
            // down to the component as props
            <IndividualItem
              // categoryId={match.params.categoryId}
              slug={match.params.slug}
            />
          )}
        />
        
        <Route
          path="/item/:slug"
          exact
          render={() => <Baz content={externalContent} />}
        />
         {/* <Route path="/item" exact component={IndividualItem} /> */}
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
