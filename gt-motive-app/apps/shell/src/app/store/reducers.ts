import { ActionReducerMap } from "@ngrx/store";
import { UiState, uiReducer, uiInitialState, UserState, userReducer } from '@gt-motive-app/store';

export const rootInitialState = {
    ui: uiInitialState
}

export interface RootState {
    ui: UiState;
    user: UserState;
}

export const reducers: ActionReducerMap<RootState> = {
    ui: uiReducer,
    user: userReducer
}