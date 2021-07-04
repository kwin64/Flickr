import {Grid, IconButton} from '@material-ui/core';
import React from 'react';
import {Bookmarks, Cloud} from "@material-ui/icons";
import {NavLink} from 'react-router-dom';
import s from "./Navbar.module.css"

export const Navbar: React.FC = () => {

    return (
        <div className={s.nav}>
            <Grid container direction="column" alignItems="center">
                <NavLink to="/search" activeClassName={s.active}>
                    <IconButton>
                        <Cloud fontSize='large'/>
                    </IconButton>
                </NavLink>
                <NavLink to="/bookmarks" activeClassName={s.active}>
                    <IconButton>
                        <Bookmarks fontSize='large'/>
                    </IconButton>
                </NavLink>
            </Grid>
        </div>
    );
}

