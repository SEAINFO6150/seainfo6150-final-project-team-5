import React, { Component } from "react";
import styles from "./Feedback.css";
import { render } from "react-dom";

class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitFeedback = this.handleSubmitFeedback.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmitFeedback(event) {
        alert('Thank you ' + this.state.value+' for sharing your feedback with us.');
        event.preventDefault();
    }

    render() {
        return(
            
            <div class = "outer"> 
                <div class = "title">
                    <h3>Share your Feedback</h3>
                </div>
                <div class="feed">
                    <div class= "image">
                        <img src="https://media1.giphy.com/media/efH71P7VVb9iE/200.webp?cid=ecf05e47673994b64a40c97ee37d26f58da0e61276fc0774&rid=200.webp" alt="gif"/>
                    </div>
                    <br></br>
                    <form>
                        <label for="name">Your Name</label>
                        <input type="text" id="name" name="name" placeholder="Your name.." value={this.state.value} onChange={this.handleChange}></input>

                        <label for="email">Your email</label>
                        <input type="text" id="email" name="email" placeholder="Your email.."></input>
                        <br></br>
                        <label for="submitfeedback">Share your feedback</label><br></br>
                        <textarea id="feedback" name="feedback" placeholder="Write something.."></textarea>
                        <input onClick={this.handleSubmitFeedback} type="submit" value="Share feedback"></input>
                    </form>
                </div>
            </div>
          
        );
    }
}

export default Feedback;