import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BasePokemonState } from './pokemonList.reducer';

export const selectPokemonFeature = createFeatureSelector<BasePokemonState>('pokemon');
export const selectPokemonListState = createSelector(
  selectPokemonFeature,
  (state: BasePokemonState) => state.pokemonList
);
export const selectPokemonList = createSelector(selectPokemonListState, state => state?.list)
export const selectPokemonSelected = createSelector(selectPokemonListState, state => state?.selected)
export const selectPokemonQuery = createSelector(selectPokemonListState, state => state?.query)
