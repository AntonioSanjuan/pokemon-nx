import { createReducer, on } from "@ngrx/store"
import { loadedApp } from "./ui.actions"
import { UiState } from "./models/uiState.model"
import { uiInitialState } from "./models/uiState.initialState"

export const uiReducer = createReducer(
    uiInitialState,
    on(loadedApp, (state: UiState) => {
        return {
            ...state, 
            isLoadedApp: true
        }
    })
)