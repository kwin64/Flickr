import {Dispatch} from "redux";
import {photoInfo, userAPI} from "../../DAL/mainPageAPI";

export type ActionsType = ReturnType<typeof setNewPhotos>

export enum searchKeyWordTypes {
    'SET-NEW-PHOTOS' = 'searchKeyWord/SET-NEW-PHOTOS',
}

export type InitialStateSearchKeyWordType = typeof initialState

let initialState = {
    photos: [] as Array<photoInfo>
}

export const mainPageReducer = (state = initialState, action: ActionsType): InitialStateSearchKeyWordType => {
    switch (action.type) {
        case searchKeyWordTypes["SET-NEW-PHOTOS"] :
            return {
                ...state,
                photos: action.photos
            }
        default:
            return state
    }
}

//AC
export const setNewPhotos = (photos: Array<photoInfo>) => ({type: searchKeyWordTypes["SET-NEW-PHOTOS"], photos} as const)

//TC
export const searchNewPhotos = (nameUser: string) => (dispatch: Dispatch) => {
    try {
        userAPI.getNewImages(nameUser)
            .then(res => {
                dispatch(setNewPhotos(res.data.photos.photo))
            })
    } catch (e) {
        throw Error(e)
    }
}
