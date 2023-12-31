import { createReducer, on } from '@ngrx/store';
import * as PokemonFiltersActions from "./pokemonFilters.actions";
import { PokemonTypesFiltersResponseDto } from '@gt-motive-app/libs/models';

export const POKEMONFILTERS_FEATURE_KEY = 'pokemonFilters';


export interface PokemonFiltersState {
    types: PokemonTypesFiltersResponseDto | undefined,
}

export const initialPokemonFiltersState: PokemonFiltersState = {
  types: undefined,
}

export const pokemonFiltersReducer = createReducer(
    initialPokemonFiltersState,
    on(PokemonFiltersActions.getpokemonTypesFiltersRequestError, (state: PokemonFiltersState) => ({
      ...state,
    })),
    on(PokemonFiltersActions.getpokemonTypesFiltersRequestSuccess, (state: PokemonFiltersState, { pokemonsTypeFilters }) => ({
      ...state,
      types: pokemonsTypeFilters
    })),

);