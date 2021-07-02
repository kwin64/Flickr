import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {searchNewPhotos} from '../../BLL/reducers/mainPageReducer';
import {MainPage} from "./MainPage";

type MainPageContainerPropsType = {}

export const MainPageContainer: React.FC<MainPageContainerPropsType> = props => {

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
        <MainPage searchKeyWord={searchKeyWord}
                  newKeyWord={newKeyWord}
        />
    );
}

