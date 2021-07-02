import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import './App.module.css';
import {MainPageContainer} from "./components/UI/MainPage/MainPageContainer";
import {BookmarksContainer} from "./components/UI/Bookmarks/BookmarksContainer";

function App() {
    return (
        <>
            <Switch>
                <Route exact path='/' render={() => <Redirect to='/main'/>}/>
                <Route exact path='/main' render={() => <MainPageContainer/>}/>
                <Route exact path='/bookmarks' render={() => <BookmarksContainer/>}/>
                <Route exact path='/404' render={() => <div>404 PAGE NO FOUND</div>}/>
                <Route exact path='*' render={() => <Redirect to='404'/>}/>
            </Switch>
        </>
    )
}

export default App;
