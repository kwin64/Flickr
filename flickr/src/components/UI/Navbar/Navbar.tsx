import React from 'react';
import s from './Navbar.module.css'
import searchImg from '../../../common/assets/cloud.png';
import bookmarksImg from '../../../common/assets/bookmarks.png';
import {NavLink} from "react-router-dom";

export const Navbar: React.FC = () => {

    return (
        <div className={s.nav}>

            <NavLink className={s.activeLink}
                     to='/search'>
                <img src={searchImg}
                     alt=""
                />
            </NavLink>

            <NavLink className={s.activeLink}
                     to='/bookmarks'>
                <img src={bookmarksImg}
                     alt=""
                />
            </NavLink>
        </div>
    );
}

