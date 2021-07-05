import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {searchNewPhotos} from '../../../BLL/reducers/mainPageReducer';
import {SearchPage} from "./SearchPage";
import {AppRootStateType} from "../../../BLL/store";

type MainPageContainerPropsType = {}

export const SearchPageContainer: React.FC<MainPageContainerPropsType> = () => {

    const dispatch = useDispatch()
    const [keyWord, setKeyWord] = useState('')
    const activePage = useSelector<AppRootStateType, number>(state => state.mainPageReducer.pagination.page)

    useEffect(() => {
        if (keyWord) {
            dispatch(searchNewPhotos(keyWord))
        }
    }, [activePage, dispatch, keyWord])

    const searchKeyWord = () => {
        dispatch(searchNewPhotos(keyWord))
    }

    const newKeyWord = (e: ChangeEvent<HTMLInputElement>) => {
        setKeyWord(e.currentTarget.value)
    }

    return (
        <SearchPage searchKeyWord={searchKeyWord}
                    newKeyWord={newKeyWord}
        />
    );
}

