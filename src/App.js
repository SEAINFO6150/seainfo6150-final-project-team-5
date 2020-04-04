import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home/Home.jsx";
import Foo from "./Foo/Foo.jsx";
import Bar from "./Bar/Bar.jsx";
import Baz from "./Baz/Baz.jsx";
import Error from "./Error/Error.jsx";

import recipes from "./data/Recipes.json";

import CategoriesList from "./Categories/CategoriesList.jsx";
import IndividualItem from "./IndividualItem/IndividualItem.jsx";

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
        <nav>
          <ul>
            {/* these links should show you how to connect up a link to a specific route */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categories/Breakfast">Breakfast</Link>
            </li>
            <li>
              <Link to="/categories/Lunch">Lunch</Link>
            </li>
            <li>
              <Link to="/categories/Dinner">Dinner</Link>
            </li>
            <li>
              <Link to="/categories/Dessert">Dessert</Link>
            </li>
            <li>
              <Link to="/bar/hats/sombrero">Get in touch</Link>
            </li>
            <li>
              <Link to="/baz">About Us</Link>
            </li>
            {/* <li>
              <Link to="/item/slug">Individual</Link>
            </li> */}
            <li>
              <Link to="/error">Error</Link>
            </li>
          
          </ul>
        </nav>
      </header>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact component={Home} />
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
          path="/baz"
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
