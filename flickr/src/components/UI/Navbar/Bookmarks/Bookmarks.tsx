import React from 'react';
import s from './Bookmarks.module.css'
import {Phototable} from "../SearchPage/Phototable/Phototable";

type BookmarksPropsType = {}

export const Bookmarks: React.FC<BookmarksPropsType> = () => {

    return (
        <Phototable/>
    );
}

