import React from "react";
import PostList from "../../components/PostList/PostList"

const Posts = (props) => {
    let displayContent;
    
    if (props.posts.length) {
        displayContent = <PostList posts={props.posts} />
    } else {
        displayContent = <div> Fetching Data... </div>
    }

    return (
        <div>{displayContent}</div>
    )
};

export default Posts;