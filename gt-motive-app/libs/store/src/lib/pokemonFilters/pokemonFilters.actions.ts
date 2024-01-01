import { PokemonTypesFiltersResponseDto } from '@gt-motive-app/libs/models';
import { createAction, props } from '@ngrx/store';

export const getpokemonTypesFiltersRequest = createAction(
  '[Pokemon/PokemonList/API] getpokemonTypesFiltersRequest Request')

export const getpokemonTypesFiltersRequestSuccess = createAction(
  '[Pokemon/PokemonList/API] getpokemonTypesFiltersRequest Request Success', props<{ pokemonsTypeFilters: PokemonTypesFiltersResponseDto}>())

export const getpokemonTypesFiltersRequestError = createAction(
  '[Pokemon/PokemonList/API] getpokemonTypesFiltersRequest Request Error')
