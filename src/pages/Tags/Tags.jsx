import React from 'react'
import styles from './Tags.module.css'
import TagItem from '../../components/TagItem/TagItem'

const Tags = (props) => {
    let tagsObject = {};
    props.posts.forEach(post => {
        post.Tags.forEach(tag => {
            if (tag in tagsObject) {
                tagsObject[tag] += 1;
            } else {
                tagsObject[tag] = 1;
            }
        })
    })

    return (
        <div>
            <picture className={styles.picture}>
            <source media="(max-width: 768px)" srcSet="https://cdn.dribbble.com/users/77918/screenshots/15381710/media/de4bb66f7862d49d99fb73531f6ce0bb.png?compress=1&resize=1600x1200" />
            <source media="(min-width: 1200px)" srcSet="https://cdn.dribbble.com/users/77918/screenshots/15381710/media/de4bb66f7862d49d99fb73531f6ce0bb.png?compress=1&resize=1600x1200" />
                <img src="https://cdn.dribbble.com/users/77918/screenshots/15381710/media/e507e4807c0a0e6f4bbc1aac19e63232.png?compress=1&resize=1600x1200" alt="Chris standing up holding his daughter Elva" />
            </picture>
        <article className={styles.tags_container}>
            <h1 className={styles.title}>Tags <span role="img" aria-label="Tags">🏷️</span></h1>
            <div className={styles.tags_box}>
                {
                    Object.keys(tagsObject).map(function(key, index) {
                        return <TagItem tag={[key,tagsObject[key]]} key={key} />
                    })
                }
            </div>
        </article>
        </div>
    )
}

export default Tags
