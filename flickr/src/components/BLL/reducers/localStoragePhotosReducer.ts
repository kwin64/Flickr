import {photoInfo} from "../../DAL/mainPageAPI";
import {AppRootStateType} from "../store";
import {Dispatch} from "redux";

type ActionsType = ReturnType<typeof addPhoto>
    | ReturnType<typeof deletePhoto>
    | ReturnType<typeof setPhotos>

export enum localStorageReducerType {
    'ADD-PHOTO' = 'localStorage/ADD-PHOTO',
    'DELETE-PHOTO' = 'localStorage/DELETE-PHOTO',
    'SET-PHOTOS' = 'localStorage/SET-PHOTOS'
}

type InitialStateType = Array<photoInfo>;
const initialState: InitialStateType = [];

export const localStorageReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case localStorageReducerType['ADD-PHOTO']:
            return [...state, action.photo]
        case localStorageReducerType['DELETE-PHOTO']:
            return [...state.filter(ph => ph.id !== action.photoId)]
        case localStorageReducerType['SET-PHOTOS']:
            return [...action.photos]
        default:
            return state
    }
}

//AC
export const addPhoto = (photo: photoInfo) => ({type: localStorageReducerType['ADD-PHOTO'], photo} as const);
export const deletePhoto = (photoId: string) => ({type: localStorageReducerType['DELETE-PHOTO'], photoId} as const);
export const setPhotos = (photos: Array<photoInfo>) => ({
    type: localStorageReducerType['SET-PHOTOS'],
    photos
} as const);

//TC
export const addPhotoTC = (photo: photoInfo) => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    let state = localStorage.getItem("state");
    state && dispatch(setPhotos(JSON.parse(state)));
    dispatch(addPhoto(photo));
    localStorage.setItem("state", JSON.stringify(getState().localStorageReducer));
}

export const removePicture = (photoId: string) => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    dispatch(deletePhoto(photoId));
    localStorage.setItem("state", JSON.stringify(getState().localStorageReducer));
}

export const setPictures = () => (dispatch: Dispatch) => {
    let state = localStorage.getItem("state");
    state && dispatch(setPhotos(JSON.parse(state)));
}