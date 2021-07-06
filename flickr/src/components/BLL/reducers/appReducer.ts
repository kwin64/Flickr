export type AppActionType = ReturnType<typeof setRequestStatus>
export type AppInitialStateType = typeof initialState
export type RequestStatusType = null | 'ok'

export enum appReducerType {
    'SET-REQUEST-STATUS' = 'mainPage/SET-REQUEST-STATUS',
}

let initialState = {
    requestStatus: null as RequestStatusType
}

const appReducer = (state = initialState, action: AppActionType): AppInitialStateType => {
    switch (action.type) {
        case appReducerType["SET-REQUEST-STATUS"]:
            return {
                ...state, requestStatus: action.requestStatus
            }
        default:
            return state
    }
}

export const setRequestStatus = (requestStatus: RequestStatusType) => ({
    type: appReducerType["SET-REQUEST-STATUS"],
    requestStatus
} as const)

export default appReducer