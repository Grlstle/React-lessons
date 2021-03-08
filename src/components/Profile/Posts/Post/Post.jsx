import React from "react";
import cls from './Post.module.css'

function Post() {
    return (
        <div className={cls.post}>
            <div className={cls.img__wrapper}>
                <img 
                    className={cls.post__img}
                    src="https://fk.pythonanywhere.com/ujv"
                />
            </div>
            <div className={cls.post__title}>
                Fname Lname
            </div>
            <div className={cls.post__text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eos adipisci magnam perferendis asperiores! Facilis ut perferendis maiores nostrum, recusandae labore, similique ducimus commodi est quae, esse quos tempora possimus!
            </div>
        </div>
    );
}

export default Post;
