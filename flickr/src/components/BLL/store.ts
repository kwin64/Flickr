import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {searchKeyWord} from "./reducers/searchKeyWord";

const rootReducer = combineReducers({
    searchKeyWord
})
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>