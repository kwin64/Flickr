import React, {useEffect} from 'react';
import './App.module.css';
import {useDispatch, useSelector} from "react-redux";
import {searchNewPhotos} from "./components/BLL/reducers/searchKeyWord";
import {AppRootStateType} from "./components/BLL/store";
import {photo} from "./components/DAL/instance";

function App() {

    const dispatch = useDispatch()
    const photos = useSelector<AppRootStateType, Array<photo>>(state => state.searchKeyWord.photos)

    useEffect(() => {
        dispatch(searchNewPhotos('cat'))
    }, [dispatch])

    console.log(photos)

    return (
        <>
            {photos.map(photo => {
                return <div key={photo.id}>
                    <div>photoId:{photo.id}</div>
                    <div>photoTitle:{photo.title}</div>
                </div>
            })}
        </>
    );
}

export default App;
