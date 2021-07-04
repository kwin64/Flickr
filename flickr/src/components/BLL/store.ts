import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {mainPageReducer} from "./reducers/mainPageReducer";
import {localStorageReducer} from "./reducers/localStoragePhotosReducer";

const rootReducer = combineReducers({
    mainPageReducer,
    localStorageReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof store.getState>