import React from 'react'
import styles from "./Error.module.css";

const Error = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>  
                <h2>OOPS..Page not found!!</h2>
                <h1>404</h1>
                <h4> Foodwali's are checking what's taking so long to present your recipe...</h4>
                <a href = '/'> Go back to HomePage</a>
            </div>
        </div>
    )
}

export default Error
