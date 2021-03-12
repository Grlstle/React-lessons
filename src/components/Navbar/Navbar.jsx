import React from "react";
import { NavLink } from "react-router-dom";
import cls from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={cls.nav}>
            <div className={cls.nav__item}>
                <NavLink 
                    to="/Profile"
                    activeClassName={cls.selected}>
                    Profile
                </NavLink>
            </div>
            <div className={cls.nav__item}>
                <NavLink
                    to="/Messages"
                    activeClassName={cls.selected}>
                    Messages
                </NavLink>
            </div>
            <div className={cls.nav__item}>
                <NavLink 
                    to="/News"
                    activeClassName={cls.selected}>
                    News
                </NavLink>
            </div>
            <div className={cls.nav__item}>
                <NavLink 
                    to="/Music"
                    activeClassName={cls.selected}>
                    Music
                </NavLink>
            </div>
            <div className={cls.nav__item}>
                <NavLink
                    to="/Settings"
                    activeClassName={cls.selected}>
                    Settings
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
