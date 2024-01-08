import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectPokemonFeature } from '../pokemon/pokemon.selectors';
import { BasePokemonState } from '../pokemon/pokemon.reducer';
import { POKEMONLIST_FEATURE_KEY } from './pokemonList.reducer';

export const selectPokemonListState = createSelector(
  selectPokemonFeature,
  (state: BasePokemonState) => state[POKEMONLIST_FEATURE_KEY]
);
export const selectPokemonList = createSelector(selectPokemonListState, state => state?.list)
export const selectPokemonSelected = createSelector(selectPokemonListState, state => state?.selected)
export const selectPokemonQuery = createSelector(selectPokemonListState, state => state?.query)
