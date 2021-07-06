import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {mainPageReducer} from "./reducers/mainPageReducer";
import appReducer from "./reducers/appReducer";

const rootReducer = combineReducers({
    mainPageReducer,
    appReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof store.getState>