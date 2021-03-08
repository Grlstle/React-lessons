import React from "react";
import cls from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={cls.nav}>
            <div className={cls.nav__item}>
                <a href="#">Profile</a>
            </div>
            <div className={cls.nav__item}>
                <a href="#"> Messages</a>
            </div>
            <div className={cls.nav__item}>
                <a href="#">News</a>
            </div>
            <div className={cls.nav__item}>
                <a href="#">Music</a>
            </div>
            <div className={cls.nav__item}>
                <a href="#">Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;
