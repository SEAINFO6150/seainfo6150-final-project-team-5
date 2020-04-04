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
                <div>  
                    <ul> 
                    <li> 
                    {/* <label className = {styles.name}> Name </label>
                    <input type = "text" onChange = {this.handleChange} id = "box"/> */}
                    <input class="input-effect" type = "text" name = "fullname"></input>
                        <label> Your name</label>
                        <span class = "focus-border"></span>
                    {/* <label> Email </label>
                    <input type = "text" id = "box"/> */}

                    <input class="input-effect" type = "text" Email = "fullname"></input>
                        <label> Your email</label>
                        <span class = "focus-border"></span><br/>

                    {/* <div className = "form-check">  */}
                        <label> 
                            <input type = "radio" name ="options" value = "Drop us a recipe" checked = {true} className = "form-check-input" />
                            Drop us a recipe
                        </label>
                        <label>
                        <textarea id = "textArea"/>
                        </label>
                        <label> OR upload your recipe </label>
                        <input type = "file" />
                    {/* </div> */}
                    <br/>
                    <input onClick = {this.handleShare} value ="SHARE" id = "button"/>

                    {/* <div className = "form-check"> */}
                        <label>
                            <input type = "radio" name = "options" value = "Share your feedback" className = "form-check-input" />
                            Share your feedback
                        </label>
                        <label>
                            <textarea id ="textArea"/>
                        </label>
                    {/* </div> */}
                    <input onClick = {this.handleSubmit} value = "SUBMIT" id = "button"/>
                 {/* </div> */}
                 </li>
                 </ul>
                 </div>
                </form>
                </html>
            );
        }
    }
        

    export default GetInTouchForm;