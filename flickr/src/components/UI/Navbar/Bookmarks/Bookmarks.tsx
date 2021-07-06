import React from 'react';
import s from './Bookmarks.module.css'
import {Phototable} from "../../common/Phototable/Phototable";
import {photoInfo} from "../../../DAL/mainPageAPI";

type BookmarksPropsType = {
    photosLocalStorage: Array<photoInfo>
    deletePhotoLocalStorage: (id: string) => void
}

export const Bookmarks: React.FC<BookmarksPropsType> = props => {

    const {
        photosLocalStorage,
        deletePhotoLocalStorage
    } = props

    return (
        <div className={s.container}>
            <Phototable photos={photosLocalStorage}
                        buttonName={'Remove it!'}
                        handlerOnClick={deletePhotoLocalStorage}
            />
        </div>
    );
}

