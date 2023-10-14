import { createReducer, on } from '@ngrx/store';
import * as PokemonListActions from "./pokemonList.actions";
import { PokemonDto } from '../../shared/services/Pokemon/models/pokemonsResponseDto.model';
import { PokemonQuery } from '../../shared/models/pokemonQuery.model';

export interface PokemonListState {
    list: PokemonDto[],
    selected: PokemonDto[],
    query: PokemonQuery
}

export const initialPokemonListState: PokemonListState = {
  list: [],
  selected: [],
  query: {
    currentPage: 0,
    filters: {
      byText: '',
      byType: ''
    }
  }
}

export const pokemonListReducer = createReducer(
    initialPokemonListState,
    on(PokemonListActions.getPokemonListRequestError, (state: PokemonListState) => ({
      ...state,
    })),
    on(PokemonListActions.getPokemonListRequestSuccess, (state: PokemonListState, { pokemons }) => ({
      ...state,
      list: state.list.concat(pokemons.results),
      query: {
        ...state.query,
        currentPage: state.query.currentPage + 1
      }
    })),
    on(PokemonListActions.clearPokemonList, () => ({
      ...initialPokemonListState
    }))
);