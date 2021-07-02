import React, {ChangeEvent} from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../BLL/store";
import {photoInfo} from "../../DAL/mainPageAPI";

type MainPagePropsType = {
    searchKeyWord: () => void
    newKeyWord: (e: ChangeEvent<HTMLInputElement>) => void
}

export const MainPage: React.FC<MainPagePropsType> = props => {

    const {
        searchKeyWord,
        newKeyWord
    } = props

    const photos = useSelector<AppRootStateType, Array<photoInfo>>(state => state.mainPageReducer.photos)

    return (
        <div>
            <input type="text"
                   onChange={newKeyWord}
                   placeholder='Find images'
            />
            <button onClick={searchKeyWord}
            >search
            </button>
            <>
                {photos.map(photo => {
                    return (
                        <div>
                            <img
                                src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}/>
                        </div>
                    )
                })}
            </>
        </div>
    );
}

