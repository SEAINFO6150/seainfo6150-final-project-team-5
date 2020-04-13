import React, { Component } from "react";
import styles from "./Feedback.css";
import { render } from "react-dom";

class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitFeedback = this.handleSubmitFeedback.bind(this);
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
        if (e.target.name==='feedback') {
            this.setState({  
                feedback:e.target.value
            });
        }
    }

    handleSubmitFeedback(event) {
        if (this.state.name==='' || this.state.name===null || this.state.name===undefined) {
            alert('You must provide your name');
        }
        else if (this.state.email==='' || this.state.email===null || this.state.email===undefined) {
            alert('You must provide your email');
        }
        else if (this.state.feedback==='' || this.state.feedback===null || this.state.feedback===undefined) {
            alert('You must provide your feedback');
        }
        else {
            const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
            const result = pattern.test(this.state.email);
            if (!result) {
                alert('You must provide a valid email');
            } else {
                alert('Thank you ' + this.state.name+' for sharing your feedback with us.');
                window.location.reload(false);
            }
        }
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
                        <input type="text" id="name" name="name" placeholder="Your name.." onChange={(e)=>{this.handleChange(e)}}></input>

                        <label for="email">Your email</label>
                        <input type="text" id="email" name="email" placeholder="Your email.." onChange={(e)=>{this.handleChange(e)}}></input>
                        <br></br>
                        <label for="submitfeedback">Share your feedback</label><br></br>
                        <textarea id="feedback" name="feedback" placeholder="Write something.." onChange={(e)=>{this.handleChange(e)}}></textarea>
                        <input onClick={this.handleSubmitFeedback} type="submit" value="Share feedback"></input>
                    </form>
                </div>
            </div>
          
        );
    }
}

export default Feedback;