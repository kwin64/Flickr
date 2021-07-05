import React, {useState} from 'react';
import s from './Bookmarks.module.css'
import {Phototable} from "../../Phototable/Phototable";
import {getParseLocalStorageData, setPhotoToLocalStorage} from "../../../BLL/localStorage";
import {photoInfo} from "../../../DAL/mainPageAPI";

type BookmarksPropsType = {}

export const Bookmarks: React.FC<BookmarksPropsType> = () => {

    const [photosLocalStorage, setPhotosLocalStorage] = useState<Array<photoInfo>>(
        getParseLocalStorageData('stateLocalStorage')
    );

    const deletePhotoLocalStorage = (id: string) => {

        const newPhotoData = photosLocalStorage.filter(p => p.id !== id)

        const photosFromLocalStorage = getParseLocalStorageData('stateLocalStorage');

        setPhotosLocalStorage(newPhotoData);
        setPhotoToLocalStorage('stateLocalStorage', JSON.stringify(
            newPhotoData
        ))
    }


    return (
        <div className={s.container}>
            <Phototable photos={photosLocalStorage}
                        buttonName={'Remove it!'}
                        handlerOnClick={deletePhotoLocalStorage}
            />
        </div>
    );
}

