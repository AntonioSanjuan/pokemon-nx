import { Action, combineReducers, createReducer } from '@ngrx/store';
import { PokemonState } from './models/pokemonState.model';
import { initialPokemonState } from './models/pokemonState.initialState';
import { POKEMONLIST_FEATURE_KEY, pokemonListReducer } from '@gt-motive-app/store';
import { POKEMONDETAILS_FEATURE_KEY, pokemonDetailsReducer } from '../pokemonDetails/state/pokemonDetails.reducer';


export const POKEMON_FEATURE_KEY = 'pokemon';

export const pokemonReducer = (state: PokemonState = initialPokemonState, action: Action) => 
  combineReducers({
    [POKEMONLIST_FEATURE_KEY]: pokemonListReducer,
    [POKEMONDETAILS_FEATURE_KEY]: pokemonDetailsReducer
  }, initialPokemonState)(state, action)

