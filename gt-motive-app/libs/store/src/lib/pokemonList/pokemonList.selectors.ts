import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectPokedexFeature } from '../pokedex/pokedex.selectors';
import { PokedexState } from '../pokedex/pokedex.reducer';
import { POKEMONLIST_FEATURE_KEY } from './pokemonList.reducer';

export const selectPokemonListState = createSelector(
  selectPokedexFeature,
  (state: PokedexState) => state[POKEMONLIST_FEATURE_KEY]
);
export const selectPokemonList = createSelector(selectPokemonListState, state => state?.list)
export const selectPokemonSelected = createSelector(selectPokemonListState, state => state?.selected)
export const selectPokemonQuery = createSelector(selectPokemonListState, state => state?.query)
