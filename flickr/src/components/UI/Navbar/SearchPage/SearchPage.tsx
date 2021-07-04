import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Pagination} from '../../Pagination/Pagination';
import {Phototable} from './Phototable/Phototable';
import s from './SearchPage.module.css'

type MainPagePropsType = {
    searchKeyWord: () => void
    newKeyWord: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SearchPage: React.FC<MainPagePropsType> = props => {

    const {
        searchKeyWord,
        newKeyWord
    } = props

    const handlerOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            searchKeyWord()
        }
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
            <Phototable/>
        </div>
    );
}

