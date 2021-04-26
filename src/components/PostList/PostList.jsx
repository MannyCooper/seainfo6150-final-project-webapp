import React from 'react';
import PostItem from '../PostItem/PostItem'
import styles from './PostList.module.css'

const PostList = (props) => {
    props.posts.sort(function (a, b) {
        return b.Date.localeCompare(a.Date);
    });

    let showList = props.posts.slice(0,6);

    return (
        <ul className={styles.post_list} >
            {
                showList.map(post => (
                    <PostItem post={post} key={post.Slug} />
                ))
            }
        </ul>
    )
}

export default PostList;