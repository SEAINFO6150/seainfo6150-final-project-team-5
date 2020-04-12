import React, { Component } from "react";
import styles from "./GetInTouch.css";
import { render } from "react-dom";

class GetInTouchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitRecipe = this.handleSubmitRecipe.bind(this);
        // this.handleSubmitFeedback = this.handleSubmitFeedback.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmitRecipe(event) {
        window.location.reload(false);
        alert('Thank you ' + this.state.value+' for sharing your recipe with us. We will review and feature it on Foodwali ');
        event.preventDefault();
    }

    render() {
        return (
            <div class="outer"> 
            <div class="title">
                <h3>Get Featured</h3>
            </div>
            <div class="main">
                <form>
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name.." value={this.state.value} onChange={this.handleChange}></input>

                    <label for="email">Your email</label>
                    <input type="text" id="email" name="email" placeholder="Your email.."></input>

    
                    <label for="submitrecipe">Drop us a recipe</label><br></br>
                    <textarea id="recipe" name="recipe" placeholder="Write something.."></textarea>
                    <label> OR upload your recipe </label>
                    <input type = "file" />
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