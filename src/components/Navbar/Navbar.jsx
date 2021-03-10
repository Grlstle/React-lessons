import React from "react";
import cls from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={cls.nav}>
            <div className={cls.nav__item}>
                <a href="/Profile">Profile</a>
            </div>
            <div className={cls.nav__item}>
                <a href="/Messages"> Messages</a>
            </div>
            <div className={cls.nav__item}>
                <a href="/News">News</a>
            </div>
            <div className={cls.nav__item}>
                <a href="/Music">Music</a>
            </div>
            <div className={cls.nav__item}>
                <a href="/Settings">Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;
