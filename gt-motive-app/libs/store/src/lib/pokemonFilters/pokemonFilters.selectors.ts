import { createSelector } from '@ngrx/store';
import { POKEMONFILTERS_FEATURE_KEY } from './pokemonFilters.reducer';
import { selectPokedexFeature } from '../pokedex/pokedex.selectors';
import { PokedexState } from '../pokedex/pokedex.reducer';

export const selectPokemonFiltersState = createSelector(
  selectPokedexFeature,
  (state: PokedexState) => state[POKEMONFILTERS_FEATURE_KEY]
);
export const selectPokemonTypesFiltersState = createSelector(selectPokemonFiltersState, state => state?.types)
