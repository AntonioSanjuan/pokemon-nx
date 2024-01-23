import { Action, combineReducers, createReducer } from '@ngrx/store';
import { PokedexState } from './models/pokemonState.model';
import { initialPokemonState } from './models/pokemonState.initialState';
import { POKEMONFILTERS_FEATURE_KEY, POKEMONLIST_FEATURE_KEY, pokemonFiltersReducer, pokemonListReducer } from '@gt-motive-app/store';
import { POKEMONDETAILS_FEATURE_KEY, pokemonDetailsReducer } from '../pokemonDetails/state/pokemonDetails.reducer';


export const pokemonReducer = (state: PokedexState = initialPokemonState, action: Action) => 
  combineReducers({
    [POKEMONLIST_FEATURE_KEY]: pokemonListReducer,
    [POKEMONFILTERS_FEATURE_KEY]: pokemonFiltersReducer,
    [POKEMONDETAILS_FEATURE_KEY]: pokemonDetailsReducer
  }, initialPokemonState)(state, action)

