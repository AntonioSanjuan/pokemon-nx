import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuxState, POKEMONLIST_FEATURE_KEY, PokemonListState } from './pokemonList.reducer';

export const selectPokemonFeature = createFeatureSelector<AuxState>("pokemon");
export const selectPokemonListState = createSelector(
  selectPokemonFeature,
  (state: AuxState) => state.pokemonList
);
export const selectPokemonList = createSelector(selectPokemonListState, state => state?.list)
export const selectPokemonSelected = createSelector(selectPokemonListState, state => state?.selected)
export const selectPokemonQuery = createSelector(selectPokemonListState, state => state?.query)
