import { ActionReducerMap } from "@ngrx/store";
import { UiState, uiReducer, uiInitialState } from '@gt-motive-app/store';

export const rootInitialState = {
    ui: uiInitialState
}

export interface RootState {
    ui: UiState;
}

export const reducers: ActionReducerMap<RootState> = {
    ui: uiReducer
}