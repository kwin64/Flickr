import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../BLL/store";
import {photoInfo} from '../../../../DAL/mainPageAPI';
import s from './Phototable.module.css'

type MainPagePropsType = {}

export const Phototable: React.FC<MainPagePropsType> = props => {

    const photos = useSelector<AppRootStateType, Array<photoInfo>>(state => state.mainPageReducer.photos)

    return (
        <div>
            Pagination

            <div className={s.phototable}>

                {photos.map(p => {
                    return (
                        <div className={s.photo}>
                            <img src={`https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`} alt=""/>
                            <button>Bookmarks it!</button>
                            <span>{p.title}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

