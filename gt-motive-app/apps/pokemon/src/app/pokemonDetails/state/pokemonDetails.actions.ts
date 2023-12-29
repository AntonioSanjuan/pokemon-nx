import { PokemonResponseDto } from '@gt-motive-app/libs/models';
import { createAction, props } from '@ngrx/store';

export const getPokemonByNameRequest = createAction(
  '[Pokemon/PokemonList/API] getPokemonByNameRequest Request', props<{ pokemonName: string}>())

export const getPokemonByNameRequestSuccess = createAction(
  '[Pokemon/PokemonList/API] getPokemonByNameRequest Request Success', props<{ pokemon: PokemonResponseDto}>())

export const getPokemonByNameRequestError = createAction(
  '[Pokemon/PokemonList/API] getPokemonByNameRequest Request Error')