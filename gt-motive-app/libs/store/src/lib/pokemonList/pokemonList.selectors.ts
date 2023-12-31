import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectPokemonFeature } from '../pokemon/pokemon.selectors';
import { BasePokemonState } from '../pokemon/pokemon.reducer';

export const selectPokemonListState = createSelector(
  selectPokemonFeature,
  (state: BasePokemonState) => state.pokemonList
);
export const selectPokemonList = createSelector(selectPokemonListState, state => state?.list)
export const selectPokemonSelected = createSelector(selectPokemonListState, state => state?.selected)
export const selectPokemonQuery = createSelector(selectPokemonListState, state => state?.query)
