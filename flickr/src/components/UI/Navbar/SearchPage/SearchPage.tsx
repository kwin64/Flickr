import React, {ChangeEvent} from 'react';
import {Pagination} from '../../Pagination/Pagination';
import {Phototable} from '../../common/Phototable/Phototable';
import s from './SearchPage.module.css'
import {photoInfo} from "../../../DAL/mainPageAPI";

type MainPagePropsType = {
    newKeyWord: (e: ChangeEvent<HTMLInputElement>) => void
    addPhotoLocalStorage: (id: string) => void
    photos: Array<photoInfo>
}

export const SearchPage: React.FC<MainPagePropsType> = props => {

    const {
        newKeyWord,
        addPhotoLocalStorage,
        photos
    } = props

    return (
        <div className={s.container}>
            <input className={s.textArea}
                   type="text"
                   onChange={newKeyWord}
                   placeholder='Find images'
            />
            <Pagination/>
            <Phototable photos={photos}
                        buttonName={'Bookmarks it!'}
                        handlerOnClick={addPhotoLocalStorage}
            />
        </div>
    );
}

