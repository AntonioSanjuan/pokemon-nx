import { UiState } from "./uiState.model";

export const uiInitialState: UiState =  {
    actionOngoing: false,
    blockByRequest: true,
    requestCounter: 0,
    loadedApps: []
}