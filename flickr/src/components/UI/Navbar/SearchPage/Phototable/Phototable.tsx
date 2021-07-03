import React from 'react';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../BLL/store";
import {photoInfo} from '../../../../DAL/mainPageAPI';
import s from './Phototable.module.css'
import Paper from '@material-ui/core/Paper';

type MainPagePropsType = {}

export const Phototable: React.FC<MainPagePropsType> = props => {

    const photos = useSelector<AppRootStateType, Array<photoInfo>>(state => state.mainPageReducer.photos)

    return (
        <div>
            Pagination

            <div className={s.phototable}>

                {photos.map(p => {
                    return (
                        <div>
                            <Paper elevation={3}>
                                <div className={s.photo} key={p.id}>
                                    <div className={s.photoContainer}>
                                        <img src={`https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`}
                                             alt=""/>
                                    </div>
                                    <button>Bookmarks it!</button>
                                    <span>{p.title}</span>
                                </div>
                            </Paper>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

