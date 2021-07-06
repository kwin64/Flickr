import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {searchNewPhotos, setNewPhotos, setPages} from '../../../BLL/reducers/mainPageReducer';
import {SearchPage} from "./SearchPage";
import {AppRootStateType} from "../../../BLL/store";
import {Debouncing} from '../../common/Debouncing/Debouncing';

type MainPageContainerPropsType = {}

export const SearchPageContainer: React.FC<MainPageContainerPropsType> = () => {

    const dispatch = useDispatch()
    const [keyWord, setKeyWord] = useState('')
    const activePage = useSelector<AppRootStateType, number>(state => state.mainPageReducer.pagination.page)

    const debounce = Debouncing(keyWord, 3000)

    useEffect(() => {
        if (keyWord.trim()) {
            debounce && dispatch(searchNewPhotos(keyWord.trim()))
        }
        if (keyWord === '') {
            dispatch(setNewPhotos([]))
            dispatch(setPages(0))
        }
    }, [activePage, dispatch, keyWord, debounce])

    const newKeyWord = (e: ChangeEvent<HTMLInputElement>) => {
        setKeyWord(e.currentTarget.value);
    }

    return (
        <SearchPage newKeyWord={newKeyWord}/>
    );
}

