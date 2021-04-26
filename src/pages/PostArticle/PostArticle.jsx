import React from 'react';
import HTMLText from '../../components/HTMLText/HTMLText';
import styles from './PostArticle.module.css';
import moment from "moment";
import { Link } from "react-router-dom";
import Comment from "../../components/Comment/Comment"


const PostArticle = (props) => {
    let path = '/categories/' + props.post.Category;
    return (
        <div className={styles.post_body}>
            <article className={styles.post_content}>
                <header className={styles.header}>
                    <Link to={path} className={styles.category}>{props.post.Category}</Link>
                    <time className={styles.date} dateTime={props.post.Date}>
                        {moment(props.post.Date, 'YYYY-MM-DD').format('MMM Do, YYYY')}
                    </time>
                    <h1 className={styles.title}>{props.post.Title}</h1>
                    <img className={styles.image} src={props.post.Cover} alt={props.post.Title} />
                </header>
                <HTMLText text={props.post.Content} />
            </article>
            <Comment />
        </div>
    );
};

export default PostArticle;