import { createFeatureSelector, createSelector } from '@ngrx/store'
import { UiState } from './models/uiState.model'

export const getUiState = createFeatureSelector<any>('uiState')
export const isLoadedApp = createSelector(getUiState, (state: UiState) => state.isLoadedApp)