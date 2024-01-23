import { createFeatureSelector } from '@ngrx/store';
import { PokedexState } from './models/pokemonState.model';
import { POKEDEX_FEATURE_KEY } from '@gt-motive-app/store';

export const selectPokemonState =
  createFeatureSelector<PokedexState>(POKEDEX_FEATURE_KEY);