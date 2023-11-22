import { Action, combineReducers } from '@ngrx/store';
import { PokemonState } from './models/pokemonState.model';
import { initialPokemonState } from './models/pokemonState.initialState';
import { POKEMONLIST_FEATURE_KEY, pokemonListReducer } from '@gt-motive-app/store';


export const POKEMON_FEATURE_KEY = 'pokemon';

export const pokemonReducer = (state: PokemonState = initialPokemonState, action: Action) => 
  combineReducers({
    [POKEMONLIST_FEATURE_KEY]: pokemonListReducer
  }, initialPokemonState)(state, action)
