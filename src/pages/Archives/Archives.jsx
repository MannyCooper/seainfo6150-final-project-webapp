import React from 'react';
import styles from './Archives.module.css';
import ArchiveItem from "../../components/ArchiveItem/ArchiveItem"

import moment from "moment";

const Archives = (props) => {
    props.posts.sort(function (a, b) {
        return b.Date.localeCompare(a.Date);
    });

    let yearList = [];
    props.posts.forEach(post => {
        let year = moment(post.Date, "YYYY-MM-DD").format("YYYY")
        yearList.push(year);
    })

    function unique(arr) {
        return Array.from(new Set(arr))
    }

    yearList = unique(yearList);

    function archiveList(year) {
        let yearPostsList = props.posts.filter(post => (
            moment(post.Date, "YYYY-MM-DD").format("YYYY") === year
        ))
        return yearPostsList.map(post => <ArchiveItem post={post} key={post.Slug} />)
    }

    return (
        <div className={styles.archives_body}>
            <article className={styles.list}>
                <h1 className={styles.title}>Archives<span role="img" aria-label="Archive">🗄</span></h1>  
                {
                    yearList.map((year) => (
                        <div key={year}>
                            <h1 className={styles.year}>{year}</h1>
                            {archiveList(year)}
                        </div>
                    ))
                }
            </article>
        </div>
    )
}

export default Archives
