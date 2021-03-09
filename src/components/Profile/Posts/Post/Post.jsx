import React from "react";
import cls from './Post.module.css'

function Post(props) {
    return (
        <div className={cls.post}>
            <div className={cls.img__wrapper}>
                <img 
                    className={cls.post__img}
                    src={props.img}
                />
            </div>
            <div className={cls.post__title}>
                {props.name}
            </div>
            <div className={cls.post__text}>
                {props.text}
            </div>
        </div>
    );
}

export default Post;
