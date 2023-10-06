import { ActionReducerMap } from "@ngrx/store";
import { UiState, uiReducer, uiInitialState, UserState, userReducer, userInitialState } from '@gt-motive-app/store';

export const rootInitialState = {
    ui: uiInitialState,
    user: userInitialState
}

export interface RootState {
    ui: UiState;
    user: UserState;
}

export const reducers: ActionReducerMap<RootState> = {
    ui: uiReducer,
    user: userReducer
}