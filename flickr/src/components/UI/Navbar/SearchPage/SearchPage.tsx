import React, {ChangeEvent, KeyboardEvent} from 'react';
import {Phototable} from './Phototable/Phototable';

type MainPagePropsType = {
    searchKeyWord: () => void
    newKeyWord: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SearchPage: React.FC<MainPagePropsType> = props => {

    const {
        searchKeyWord,
        newKeyWord
    } = props

    const asasa = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            searchKeyWord()
        }
    }

    return (
        <div>
            <input type="text"
                   onChange={newKeyWord}
                   placeholder='Find images'
                   onKeyPress={asasa}
            />
            <Phototable/>
        </div>
    );
}

