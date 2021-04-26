import React from "react";
import { Link } from "react-router-dom";
import styles from "./TagItem.module.css"

const TagItem = (props) =>{
    let path = '/tags/' + props.tag[0];
    return (
        <div className={styles.tag}>
            <Link className={styles.link} to={path} >
                <span className={styles.name}>{props.tag[0]}</span>
                <span className={styles.number}>{props.tag[1]}</span>
            </Link>
        </div>
    )
}

export default TagItem;