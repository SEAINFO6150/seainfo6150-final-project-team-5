import React, { Component } from "react";
import styles from "./GetInTouch.css";

class GetInTouchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleShare = this.handleShare.bind(this);
        }
        handleChange(event) {
            this.setState({value: event.target.value});
        }

        handleSubmit(event) {
            alert('Thank you '+ this.state.value +' your feedback is submitted ');
            event.preventDefault();
        }

        handleShare(event) {
            alert('Thank you '+this.state.value+' for sharing your recipe with us. We will review and feature it on Foodwali ');
            event.preventDefault();
        }

        render() {
            return (
                <html> 
                <head> 
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                </head>
                <form onSubmit = {this.handleSubmit} >
                <div id="divPart">  
                    <ul id="GetInTouchList"> 
                    <li > 
                    {/* <label className = {styles.name}> Name </label>
                    <input type = "text" onChange = {this.handleChange} id = "box"/> */}
                    <input class="input-effect" type = "text" name = "fullname"></input><br/>
                        <label> Your name </label>
                        <span class = "focus-border"></span>
                        <br/>

                    <input class="input-effect" type = "text" Email = "fullname"></input><br/>
                        <label> Your email</label>
                        <span class = "focus-border"></span><br/><br/>

                        <label> 
                            <input type = "radio" name ="options" value = "Drop us a recipe" checked = {true} className = "form-check-input" />
                            Drop us a recipe
                        </label>
                        <label>
                        <textarea id = "textArea"/>
                        </label>
                        <label> OR upload your recipe </label>
                        <input type = "file" />
                    <br/>
                    <input onClick = {this.handleShare} value ="SHARE" id = "button"/>

                        <label>
                            <input type = "radio" name = "options" value = "Share your feedback" className = "form-check-input" />
                            Share your feedback
                        </label>
                        <label>
                            <textarea id ="textArea"/>
                        </label>
                    <input onClick = {this.handleSubmit} value = "SUBMIT" id = "button"/>
                 </li>
                 </ul>
                 </div>
                </form>
                </html>
            );
        }
    }
        

    export default GetInTouchForm;