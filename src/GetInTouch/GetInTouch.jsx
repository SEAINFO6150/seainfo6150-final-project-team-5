import React, { Component } from "react";
import styles from "./GetInTouch.css";
import { render } from "react-dom";

class GetInTouchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitRecipe = this.handleSubmitRecipe.bind(this);
        this.handleSubmitFeedback = this.handleSubmitFeedback.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmitRecipe(event) {
        alert('Thank you ' + this.state.value+' for sharing your recipe with us. We will review and feature it on Foodwali ');
        event.preventDefault();
    }

    handleSubmitFeedback(event) {
        alert('Thank you ' + this.state.value+' for sharing your feedback with us.');
        event.preventDefault();
    }

    render() {
        return (
            <div class="main">
                <form>
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name.." value={this.state.value} onChange={this.handleChange}></input>

                    <label for="email">Your email</label>
                    <input type="text" id="email" name="email" placeholder="Your email.."></input>

                    <input type="radio" id="submitrecipe" name="option" value="submitrecipe" checked></input>
                    <label for="submitrecipe">Drop us a recipe</label><br></br>
                    <textarea id="recipe" name="recipe" placeholder="Write something.."></textarea>
                    <label> OR upload your recipe </label>
                    <input type = "file" />
                    <br></br>
                    <br></br>
                    <input onClick={this.handleSubmitRecipe} type="submit" value="Submit recipe"></input>
                    
                    <br></br>
                    <br></br>

                    <input type="radio" id="submitfeedback" name="option" value="submitfeedback"></input>
                    <label for="submitfeedback">Share your feedback</label><br></br>
                    <textarea id="feedback" name="feedback" placeholder="Write something.."></textarea>
                    <input onClick={this.handleSubmitFeedback} type="submit" value="Share feedback"></input>
                </form>
            </div>
        );
    }
}

export default GetInTouchForm;