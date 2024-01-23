import { createFeatureSelector, createSelector } from '@ngrx/store';
import { POKEMONCOMPARISON_FEATURE_KEY, PokemonComparisonState } from './pokemonComparison.reducer';

export const getPokemonComparisonState = createFeatureSelector<PokemonComparisonState>(POKEMONCOMPARISON_FEATURE_KEY)

export const getPokemonComparison = createSelector(getPokemonComparisonState, state => state?.pokemons)
