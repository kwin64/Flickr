import React, {useState} from 'react';
import {Bookmarks} from "./Bookmarks";
import {photoInfo} from "../../../DAL/mainPageAPI";
import {getParseLocalStorageData, setPhotoToLocalStorage} from "../../../BLL/localStorage";

type BookmarksContainerPropsType = {}

export const BookmarksContainer: React.FC<BookmarksContainerPropsType> = () => {

    const [photosLocalStorage, setPhotosLocalStorage] = useState<Array<photoInfo>>(
        getParseLocalStorageData('stateLocalStorage')
    );

    const deletePhotoLocalStorage = (id: string) => {

        const newPhotoData = photosLocalStorage.filter(p => p.id !== id)

        setPhotosLocalStorage(newPhotoData);
        setPhotoToLocalStorage('stateLocalStorage', JSON.stringify(
            newPhotoData
        ))
    }
    return (
        <Bookmarks photosLocalStorage={photosLocalStorage}
                   deletePhotoLocalStorage={deletePhotoLocalStorage}
        />
    );
}

