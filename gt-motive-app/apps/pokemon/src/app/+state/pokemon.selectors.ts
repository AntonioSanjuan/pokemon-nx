import { createFeatureSelector } from '@ngrx/store';
import { PokemonState } from './models/pokemonState.model';
import { POKEMON_FEATURE_KEY } from '@gt-motive-app/store';

export const selectPokemonState =
  createFeatureSelector<PokemonState>(POKEMON_FEATURE_KEY);