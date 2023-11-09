import { createAction, props } from '@ngrx/store';
import { PokemonsResponseDto } from '../../shared/services/Pokemon/models/pokemonsResponseDto.model';

export const setSelectPokemon = createAction(
  '[Pokemon/PokemonList/API] selectPokemon', props<{ pokemonName: string}>())

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
