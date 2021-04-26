import React from 'react';
import { Link } from "react-router-dom";
import styles from "./PostItem.module.css"
import moment from "moment";

const PostItem = (props) => {
    return(
        <li className={styles.post_item}>
                <header className={styles.header}>
                    <img className={styles.image} src={props.post.Cover} alt={props.post.Title}/>
                </header>
                <div className={styles.description}>
                    <article>
                        <Link className={styles.category} to="/">{props.post.Category}</Link>
                        <h2 className={styles.post_title}>{props.post.Title}</h2>
                    </article>
                    <time className={styles.date} dateTime={props.post.Date}>
                        {moment(props.post.Date, 'YYYY-MM-DD').format('MMM Do, YYYY')}
                    </time>
                </div>
                <Link className={styles.post_link} to={`/post/${props.post.Slug}`} />
        </li>
    )
}

export default PostItem;