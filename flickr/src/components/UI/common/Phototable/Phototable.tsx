import React from 'react';
import {photoInfo} from '../../../DAL/mainPageAPI';
import s from './Phototable.module.css'
import Paper from '@material-ui/core/Paper';
import { Preloader } from '../Preloader/Preloader';

type MainPagePropsType = {
    photos: Array<photoInfo>
    buttonName: string
    handlerOnClick: (id: string) => void
    disabledButton?: any
}

export const Phototable: React.FC<MainPagePropsType> = props => {

    const {
        photos,
        buttonName,
        handlerOnClick
    } = props


    return (
        <div>
            <div className={s.phototable}>
                {photos.map(p => {

                    const handler = () => {
                        handlerOnClick(p.id)
                    }

                    return (
                        <div key={p.id}>
                            {/*<Preloader/>*/}
                            <Paper elevation={3}>
                                <div className={s.photo} key={p.id}>
                                    <div className={s.photoContainer}>
                                        <img src={`https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`}
                                             alt=""
                                        />
                                    </div>
                                    <button onClick={handler}
                                            disabled={false}
                                    >{buttonName}</button>
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

