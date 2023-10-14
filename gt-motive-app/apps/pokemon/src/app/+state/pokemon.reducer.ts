import { Action, combineReducers } from '@ngrx/store';
import { PokemonState } from './models/pokemonState.model';
import { initialPokemonState } from './models/pokemonState.initialState';
import { pokemonListReducer } from '../pokemonList/store/pokemonList.reducer';


export const POKEMON_FEATURE_KEY = 'pokemon';

export const pokemonReducer = (state: PokemonState = initialPokemonState, action: Action) => 
  combineReducers({
    pokemonList: pokemonListReducer
  }, initialPokemonState)(state, action)
