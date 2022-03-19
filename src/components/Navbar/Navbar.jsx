import React from "react";

import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return <nav className={s.nav}>

        <div>
            <NavLink to="/profile"className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
        </div>
        <div>
            <NavLink to="/message"className = { navData => navData.isActive ? s.active : s.item }>Message</NavLink>
        </div>
        <div>
            <NavLink to="/news" className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
        </div>
        <div>
            <NavLink to="/settings" className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
        </div>
    </nav>
}
export default NavBar;