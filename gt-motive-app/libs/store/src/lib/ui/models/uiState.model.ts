import { AppInit } from "./app-init-enum";

export interface UiState {
    actionOngoing: boolean;
    block: boolean;
    requestCounter: number;
    loadedApp: AppInit[];
}