import React from 'react'
import styles from './Categories.module.css'
import CategoryItem from '../../components/CategoryItem/CategoryItem'

const Categories = (props) => {
    let catesObject = {};
    props.posts.forEach(post => {
            if (post.Category in catesObject) {
                catesObject[post.Category] += 1;
            } else {
                catesObject[post.Category] = 1;
            }
    })

    return (
        <div>
            <picture className={styles.picture}>
            <source media="(max-width: 768px)" srcSet="https://cdn.dribbble.com/users/77918/screenshots/11875016/media/ce38b4de1199891b4986b44b67324afd.png?compress=1&resize=1600x1200" />
            <source media="(min-width: 1200px)" srcSet="https://cdn.dribbble.com/users/77918/screenshots/11875016/media/5de9897f72d20f5b779c0822ec1f9f90.png?compress=1&resize=1600x1200" />
                <img src="https://cdn.dribbble.com/users/77918/screenshots/11875016/media/5da4850713b8d1f375e80faaf094f5ae.png?compress=1&resize=1600x1200" alt="Chris standing up holding his daughter Elva" />
            </picture>
        <article className={styles.categories_container}>
            <h1 className={styles.title}>Categories <span role="img" aria-label="Categories">📚</span></h1>
            <div className={styles.categories_box}>
                {
                    Object.keys(catesObject).map(function(key, index) {
                        return <CategoryItem category={[key,catesObject[key]]} key={key} />
                    })
                }
            </div>
        </article>
        </div>
    )
}

export default Categories