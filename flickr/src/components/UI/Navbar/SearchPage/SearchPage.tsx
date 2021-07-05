import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Pagination} from '../../Pagination/Pagination';
import {Phototable} from '../../Phototable/Phototable';
import s from './SearchPage.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../BLL/store";
import {photoInfo} from "../../../DAL/mainPageAPI";
import {getParseLocalStorageData, setPhotoToLocalStorage} from "../../../BLL/localStorage";

type MainPagePropsType = {
    searchKeyWord: () => void
    newKeyWord: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SearchPage: React.FC<MainPagePropsType> = props => {

    const {
        searchKeyWord,
        newKeyWord
    } = props

    const photos = useSelector<AppRootStateType, Array<photoInfo>>(state => state.mainPageReducer.photos)

    const handlerOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            searchKeyWord()
        }
    }

    const [photosLocalStorage, setPhotosLocalStorage] = useState<Array<photoInfo>>(
        getParseLocalStorageData('stateLocalStorage')
    );

    const addPhotoLocalStorage = (id: string) => {

        const newPhotoData = photos.filter(p => p.id === id)
        const photosFromLocalStorage = getParseLocalStorageData('stateLocalStorage');

        setPhotosLocalStorage([...photosFromLocalStorage, newPhotoData[0]]);
        setPhotoToLocalStorage('stateLocalStorage', JSON.stringify(
            [...photosFromLocalStorage, newPhotoData[0]]
        ))
    }

    return (
        <div className={s.container}>
            <input className={s.textArea}
                   type="text"
                   onChange={newKeyWord}
                   placeholder='Find images'
                   onKeyPress={handlerOnKeyPress}
            />
            <Pagination/>
            <Phototable photos={photos}
                        buttonName={'Bookmarks it!'}
                        handlerOnClick={addPhotoLocalStorage}
            />
        </div>
    );
}

