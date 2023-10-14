import { createFeatureSelector } from '@ngrx/store';
import { PokemonState } from './models/pokemonState.model';
import { POKEMON_FEATURE_KEY } from './pokemon.reducer';

export const selectPokemonState =
  createFeatureSelector<PokemonState>(POKEMON_FEATURE_KEY);
