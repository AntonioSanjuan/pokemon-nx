import { createFeatureSelector, createSelector } from '@ngrx/store'
import { UiState } from './models/uiState.model'

export const getUiState = createFeatureSelector<UiState>('uiState')
export const isBlocked = createSelector(getUiState, (state: UiState) => state.block)