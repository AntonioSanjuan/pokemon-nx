import { createSelector } from '@ngrx/store';
import { POKEMONFILTERS_FEATURE_KEY } from './pokemonFilters.reducer';
import { selectPokemonFeature } from '../pokemon/pokemon.selectors';
import { BasePokemonState } from '../pokemon/pokemon.reducer';

export const selectPokemonFiltersState = createSelector(
  selectPokemonFeature,
  (state: BasePokemonState) => state[POKEMONFILTERS_FEATURE_KEY]
);
export const selectPokemonTypesFiltersState = createSelector(selectPokemonFiltersState, state => state?.types)
