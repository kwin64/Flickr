import React from 'react';
import s from './Navbar.module.css'
import searchImg from '../../../common/assets/cloud.png';
import bookmarksImg from '../../../common/assets/bookmarks.png';
import {NavLink} from "react-router-dom";

export const Navbar: React.FC = () => {

    // const [search, setSearch] = useState(false)
    // const [bookmarks, setBookmarks] = useState(false)
    //
    // const openSearch = () => {
    //     setSearch(true)
    //     setBookmarks(false)
    // }
    // const openBookmarks = () => {
    //     setBookmarks(true)
    //     setSearch(false)
    // }

    return (
        <div className={s.nav}>

            <NavLink className={s.activeLink}
                     to='/search'>
                {/*<img src={searchImg}*/}
                {/*     alt=""*/}
                {/*    // onClick={openSearch}*/}
                {/*/>*/}
            </NavLink>

            <NavLink className={s.activeLink}
                     to='/bookmarks'>
                {/*<img src={bookmarksImg}*/}
                {/*     alt=""*/}
                {/*    // onClick={openBookmarks}*/}
                {/*/>*/}
            </NavLink>
        </div>
    );
}

