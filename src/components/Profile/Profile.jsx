import React from "react";
import cls from "./Profile.module.css";
import Posts from "./Posts/Posts.jsx";

function Profile(){
    return(
        <div className={cls.content}>
            <img
                src="https://fk.pythonanywhere.com/Hc7"
                className={cls.content__img}
            />   
            <textarea className={cls.message__input}></textarea>
            <button className={cls.message__btn}>Add post</button>
            <Posts/>
        </div>
    )
}

export default Profile;
