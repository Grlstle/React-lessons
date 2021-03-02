import React from "react";
import cls from "./Profile.module.css";
import Post from "./Posts/Post/Post.jsx";

function Profile() {
    return (
        <div className={cls.content}>
            <img
                src="https://fk.pythonanywhere.com/Hc7"
                className={cls.content__img}
            />
            <textarea></textarea>
            <button>Add post</button>
            <div className={cls.posts}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default Profile;
