import React from 'react';
import s from './MainPage.module.css'
import {SearchPageContainer} from "./Navbar/SearchPage/SearchPageContainer";

export const MainPage: React.FC = () => {

    return (
        <div className={s.content}>
            <SearchPageContainer/>
        </div>
    );
}

