import React from "react";
import { Link } from "react-router-dom";
import styles from "./CategoryItem.module.css";

const CategoryItem = (props) =>{
    let path = '/categories/' + props.category[0];
    return (
        <div className={styles.category}>
            <Link className={styles.link} to={path} >
                <span className={styles.name}>{props.category[0]}</span>
                <div className={styles.number_wrap}>
                    <span className={styles.number}>{props.category[1]}</span>
                </div>
            </Link>
        </div>
    )
}

export default CategoryItem;