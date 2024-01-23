import { createReducer, on } from '@ngrx/store';
import * as PokemonListActions from "./pokemonComparison.actions";
import { PokemonQuery, PokemonResponseDto } from '@gt-motive-app/libs/models';

export const POKEMONCOMPARISON_FEATURE_KEY = 'pokemonComparison';

export interface PokemonComparisonState {
    pokemons: PokemonResponseDto[]
}

export const initialPokemonComparisonState: PokemonComparisonState = {
  pokemons: []
}

export const pokemonComparisonReducer = createReducer(
    initialPokemonComparisonState,
    on(PokemonListActions.getComparisonPokemonsError, (state: PokemonComparisonState) => ({
      ...state,
    })),
    on(PokemonListActions.getComparisonPokemonsSuccess, (state: PokemonComparisonState, { pokemons }) => ({
      ...state,
      pokemons: pokemons
    })),
    on(PokemonListActions.selectComparisonPokemon, (state: PokemonComparisonState, { pokemon }) => ({
      ...state,
      pokemons: [...state.pokemons, pokemon]
    })),
    on(PokemonListActions.unselectComparisonPokemon, (state: PokemonComparisonState, { pokemonName }) => ({
      ...state,
      pokemons: state.pokemons.filter((pokemon) => pokemon.name !== pokemonName)
    })),
);