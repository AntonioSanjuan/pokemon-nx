import { createFeatureSelector, createSelector } from '@ngrx/store';
import { POKEMON_FEATURE_KEY } from './pokemon.reducer';
import { PokemonState } from './models/pokemonState.model';

export const selectPokemonState =
  createFeatureSelector<PokemonState>(POKEMON_FEATURE_KEY);