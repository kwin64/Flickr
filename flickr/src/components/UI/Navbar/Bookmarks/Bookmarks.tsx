import React, {useState} from 'react';
import s from './Bookmarks.module.css'
import {Phototable} from "../../Phototable/Phototable";
import {getParseLocalStorageData, setPhotoToLocalStorage} from "../../../BLL/localStorage";
import {photoInfo} from "../../../DAL/mainPageAPI";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../BLL/store";

type BookmarksPropsType = {}

export const Bookmarks: React.FC<BookmarksPropsType> = () => {

    const deletePhoto = () => {

    }
    const photos = useSelector<AppRootStateType, Array<photoInfo>>(state => state.mainPageReducer.photos)

    const [photosLocalStorage, setPhotosLocalStorage] = useState<Array<photoInfo>>(
        getParseLocalStorageData('stateLocalStorage')
    );

    const addPhoto = (id: string) => {

        const newPhotoData = photos.filter(p => p.id === id)

        const notesFromLocalStorage = getParseLocalStorageData('stateLocalStorage');

        setPhotosLocalStorage([...notesFromLocalStorage, newPhotoData]);
        setPhotoToLocalStorage('stateLocalStorage', JSON.stringify(
            [...notesFromLocalStorage, newPhotoData]
        ))
    }


    return (
        <div className={s.container}>
            <Phototable photos={photosLocalStorage}
                        buttonName={'Remove it!'}
                        handlerOnClick={deletePhoto}
            />
        </div>
    );
}

