import { createFeatureSelector, createSelector } from '@ngrx/store'
import { UiState } from './models/uiState.model'
import { AppInit } from './models/app-init-enum'
import { UI_FEATURE_KEY } from './ui.reducer'

export const getUiState = createFeatureSelector<UiState>(UI_FEATURE_KEY)
export const getIsUILoadedApp = createSelector(getUiState, (state: UiState) => state?.loadedApps.includes(AppInit.UI))
export const getIsBlockByRequest = createSelector(getUiState, (state: UiState) => state?.blockByRequest)