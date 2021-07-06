import React from 'react';
import s from './Preloader.module.css'
import preloader from '../../../assets/preloader.svg'

export const Preloader = () => {
    return (
        <div className={s.loadingWrap}>
            <div className={s.gooey}>
                <img src={preloader} alt=""/>
            </div>
        </div>
    )
}