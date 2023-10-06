import { createReducer, on } from "@ngrx/store"
import { endRequest, loadedApp, startRequest } from "./ui.actions"
import { UiState } from "./models/uiState.model"
import { uiInitialState } from "./models/uiState.initialState"

export const uiReducer = createReducer(
    uiInitialState,
    on(loadedApp, (state: UiState, { initialized }) => {
        return {
            ...state, 
            loadedApp: !state.loadedApp.includes(initialized) ?
                state.loadedApp.concat([initialized]):
                state.loadedApp
        }
    }),
    on(startRequest, (state) => ({
        ...state,
        actionOngoing: true,
        block: true,
        requestCounter: state.requestCounter + 1
    })),
    on(endRequest, (state) => ({
        ...state,
        actionOngoing: false,
        block: (state.requestCounter === 1) ? false : state.block,
        requestCounter: state.requestCounter - 1
    }))
)