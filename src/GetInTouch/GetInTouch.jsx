import React, { Component } from "react";
import styles from "./GetInTouch.css";
import { render } from "react-dom";

class GetInTouchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitRecipe = this.handleSubmitRecipe.bind(this);
    }

    handleChange(e) {
        if (e.target.name==='name'){
            this.setState({  
                name:e.target.value
            });
        }
        if (e.target.name==='email') {
            this.setState({  
                email:e.target.value
            });
        }
        if (e.target.name==='recipe') {
            this.setState({  
                recipe:e.target.value
            });
        }
    }

    handleSubmitRecipe(event) {
        if (this.state.name==='' || this.state.name===null || this.state.name===undefined) {
            alert('You must provide your name');
        }
        else if (this.state.email==='' || this.state.email===null || this.state.email===undefined) {
            alert('You must provide your email');
        }
        else if (this.state.recipe==='' || this.state.recipe===null || this.state.recipe===undefined) {
            alert('Please share your recipe before submitting');
        }
        else {
            const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
            const result = pattern.test(this.state.email);
            if (!result) {
                alert('You must provide a valid email');
            } else {
                alert('Thank you ' + this.state.value+' for sharing your recipe with us. We will review and feature it on Foodwali ');
                window.location.reload(false);
            }
        }
        event.preventDefault();
    }

    render() {
        return (
            <div class="outer"> 
            <div class="GetFeaturedTitle">
                <h3>Get Featured</h3>
            </div>
            <div class="main">
                <form>
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name.." onChange={(e)=>{this.handleChange(e)}}></input>

                    <label for="email">Your email</label>
                    <input type="text" id="email" name="email" placeholder="Your email.." onChange={(e)=>{this.handleChange(e)}}></input>

    
                    <label for="submitrecipe">Drop us a recipe</label><br></br>
                    <textarea id="recipe" name="recipe" placeholder="Write something.." onChange={(e)=>{this.handleChange(e)}}></textarea>
                    <label> OR upload your recipe </label>
                    <input id="recipe_file" type = "file" />
                    <br></br>
                    <br></br>
                    <input onClick={this.handleSubmitRecipe} type="submit" value="Submit recipe"></input>                  
                </form>
            </div>      
            </div>
         
        );
    }
}

export default GetInTouchForm;