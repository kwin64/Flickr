import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {searchNewPhotos} from '../../../BLL/reducers/mainPageReducer';
import {SearchPage} from "./SearchPage";

type MainPageContainerPropsType = {}

export const SearchPageContainer: React.FC<MainPageContainerPropsType> = props => {

    const {} = props

    const dispatch = useDispatch()
    const [keyWord, setKeyWord] = useState('')

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

