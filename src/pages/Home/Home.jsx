import React from 'react';
import styles from "./Home.module.css";
import Posts from "../Posts/Posts";
import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <div>
            <div className={styles.home_body}>
                <h1 className={styles.h1} dangerouslySetInnerHTML={props.title}></h1>
                <Posts posts={props.posts}/>
            </div>
            <Link className={styles.link} to="/archives">Read More ></Link>
        </div>
    )
}

export default Home
