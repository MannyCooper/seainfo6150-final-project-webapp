import React from 'react';
import styles from './ArchiveItem.module.css';
import { Link } from "react-router-dom";

import moment from "moment";

const ArchiveItem = (props) => {
    return (
        <Link className={styles.post_link} to={`/post/${props.post.Slug}`} >
            <div className={styles.item}>
                <img className={styles.small_image} src={props.post.Cover} alt={props.post.Slug} />
                <article className={styles.content}>
                    <header className={styles.info}>
                        <time className={styles.date} dateTime={props.post.Date}>
                            {moment(props.post.Date, 'YYYY-MM-DD').format('MMM Do, YYYY')}
                        </time>
                        <span className={styles.category}>{props.post.Category}</span>
                    </header>
                    <h2 className={styles.title}>{props.post.Title}</h2>
                </article>
            </div>
        </Link>
    )
}

export default ArchiveItem
