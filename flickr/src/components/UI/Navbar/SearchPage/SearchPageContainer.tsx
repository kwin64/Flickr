import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {searchNewPhotos, setNewPhotos, setPages} from '../../../BLL/reducers/mainPageReducer';
import {SearchPage} from "./SearchPage";
import {AppRootStateType} from "../../../BLL/store";
import {Debouncing} from '../../common/Debouncing/Debouncing';
import {photoInfo} from "../../../DAL/mainPageAPI";
import {getParseLocalStorageData, setPhotoToLocalStorage} from "../../../BLL/localStorage";

type MainPageContainerPropsType = {}

export const SearchPageContainer: React.FC<MainPageContainerPropsType> = () => {

    const dispatch = useDispatch()
    const [keyWord, setKeyWord] = useState('')

    const activePage = useSelector<AppRootStateType, number>(state => state.mainPageReducer.pagination.page)
    const photos = useSelector<AppRootStateType, Array<photoInfo>>(state => state.mainPageReducer.photos)

    const debounce = Debouncing(keyWord, 400)

    useEffect(() => {
        if (keyWord.trim()) {
            debounce && dispatch(searchNewPhotos(keyWord.trim()))
        }
        if (keyWord === '') {
            dispatch(setNewPhotos([]))
            dispatch(setPages(0))
        }
    }, [activePage, dispatch, keyWord, debounce])

    //LS
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

    const newKeyWord = (e: ChangeEvent<HTMLInputElement>) => {
        setKeyWord(e.currentTarget.value);
    }

    const checkPhoto = (id: string) => {
        // const s = photosLocalStorage.filter(s => s.id ===)
    }

    return (
        <SearchPage newKeyWord={newKeyWord}
                    addPhotoLocalStorage={addPhotoLocalStorage}
                    photos={photos}
        />
    )
}

