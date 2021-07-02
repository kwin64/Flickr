import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.module.css';
import {BookmarksContainer} from "./components/UI/Navbar/Bookmarks/BookmarksContainer";
import {MainPage} from './components/UI/MainPage';
import {SearchPageContainer} from "./components/UI/Navbar/SearchPage/SearchPageContainer";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from '@material-ui/icons/AccountCircle';
import s from "./components/UI/MainPage.module.css";
import searchImg from "./common/assets/cloud.png";
import bookmarksImg from "./common/assets/bookmarks.png";
import {Navbar} from "./components/UI/Navbar/Navbar";

function App() {

    const useStylesAppBar = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }));

    return (

        <div>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" className={useStylesAppBar().title}>
                        Image Finder
                    </Typography>

                    {(
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                        </div>
                    )}

                </Toolbar>

                <div className={s.mainPage}>

                    <Navbar/>

                    <Switch>
                        <Route exact path='/' render={() => <Redirect to='/main'/>}/>
                        <Route exact path='/main' render={() => <MainPage/>}/>
                        <Route exact path='/bookmarks' render={() => <BookmarksContainer/>}/>
                        <Route exact path='/search' render={() => <SearchPageContainer/>}/>
                        <Route exact path='/404' render={() => <div>404 PAGE NO FOUND</div>}/>
                        <Route exact path='*' render={() => <Redirect to='404'/>}/>
                    </Switch>

                </div>

                <Typography variant="h6" className={useStylesAppBar().title}>
                    Copyrights
                </Typography>

            </AppBar>
        </div>

    )
}

export default App;
