import React from "react";

function Profile() {
    return (
        <div className="content">
            <img
                src="https://fk.pythonanywhere.com/Hc7"
                className="content__img"
            />
            <div className="ava">Ava</div>
            <div className="description">Description</div>
            <div className="posts">My posts</div>
            <div className="posts__new">New posts</div>
            <div className="post">Post 1</div>
            <div className="post">Post 2</div>
        </div>
    );
}

export default Profile;
