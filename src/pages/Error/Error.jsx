import React from 'react';
import { Link } from "react-router-dom";
import styles from './Error.module.css';

const Error = () => {
    return (
        <div className={styles.error_container}>
            <h1 className={styles.title}>
                <span role="img" aria-label="Oops">😱 </span>
                Oops!
            </h1>
            <p className={styles.text}>You took a wrong turn.</p>
            <Link className={styles.link} to='/'>Back to Home</Link>
        </div>
    )
}

export default Error
