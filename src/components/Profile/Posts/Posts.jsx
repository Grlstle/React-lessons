import React from "react";
import cls from './Posts.module.css'
import Post from './Post/Post'


function Posts() {
    return (
        <div className={cls.posts}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Posts;
