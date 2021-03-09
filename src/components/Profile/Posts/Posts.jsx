import React from "react";
import cls from './Posts.module.css'
import Post from './Post/Post'


function Posts() {
    return (
        <div className={cls.posts}>
            <Post 
                img="https://fk.pythonanywhere.com/ujv"
                name="Кондратьев Ян Тимурович"
                text="Lorem ipsum dolor sit"
            />
            <Post 
                img="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Lil_Pump%27s_mugshot.jpg/170px-Lil_Pump%27s_mugshot.jpg"
                name="Юдин Клим Егорович"
                text="Amet consectetur adipisicing elit."    
            />
            <Post 
                img='https://resources.tidal.com/images/07738a80/a068/4ef7/8311/d378def4fef9/750x750.jpg'
                name="Богданов Власий Рудольфович"
                text="Nihil eos adipisci magnam perferendis asperiores!"
            />
            <Post 
                img="https://consequenceofsound.net/wp-content/uploads/2020/09/lil-peep-hellboy-available-streaming-services.jpg?quality=80"
                name="Марков Любовь Созонович"
                text="Facilis ut perferendis maiores nostrum"
            />
            <Post 
                img="https://static.onecms.io/wp-content/uploads/sites/20/2020/04/21/lil-xan.jpg"
                name="Герасимов Пантелей Егорович"
                text="R ecusandae labore, similique ducimus commodi est quae"
            />
            <Post 
                img="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F02%2Flil-uzi-vert-dj-premiere-kanye-west-robocop-ebro-00.jpg?w=960&cbr=1&q=90&fit=max"
                name="Копылов Митрофан Авксентьевич"
                text="Esse quos tempora possimus!"
            />
        </div>
    );
}

export default Posts;