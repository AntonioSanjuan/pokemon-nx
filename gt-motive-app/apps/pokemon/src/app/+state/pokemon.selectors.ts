import { createFeatureSelector } from '@ngrx/store';
import { PokemonState } from './models/pokemonState.model';
import { POKEDEX_FEATURE_KEY } from '@gt-motive-app/store';

export const selectPokemonState =
  createFeatureSelector<PokemonState>(POKEDEX_FEATURE_KEY);