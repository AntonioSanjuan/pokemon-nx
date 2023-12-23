import { PokemonDto, PokemonQueryFilters, PokemonsResponseDto } from '@gt-motive-app/libs/models';
import { createAction, props } from '@ngrx/store';

export const setSelectedPokemon = createAction(
  '[Pokemon/PokemonList/API] setSelectedPokemon', props<{ pokemon: PokemonDto}>())

export const clearPokemonList = createAction(
  '[Pokemon/PokemonList/API] clearPokemonList')

export const getPokemonListRequest = createAction(
  '[Pokemon/PokemonList/API] getPokemonListRequest Request')

export const getPokemonListRequestSuccess = createAction(
  '[Pokemon/PokemonList/API] getPokemonListRequest Request Success', props<{ pokemons: PokemonsResponseDto}>())

export const getPokemonListRequestError = createAction(
  '[Pokemon/PokemonList/API] getPokemonListRequest Request Error')

export const getNextPokemonListPageRequest = createAction(
  '[Pokemon/PokemonList/API] getNextPokemonListPageRequest Request')

export const getNextPokemonListPageRequestSuccess = createAction(
  '[Pokemon/PokemonList/API] getNextPokemonListPageRequest Request Success', props<{ pokemons: PokemonsResponseDto}>())

export const getNextPokemonListPageRequestError = createAction(
  '[Pokemon/PokemonList/API] getNextPokemonListPageRequest Request Error')

//
export const updatePokemonListQueryFilters = createAction(
  '[Pokemon/PokemonList/API] updatePokemonListQueryFilters', props<{ filters: PokemonQueryFilters}>())


  