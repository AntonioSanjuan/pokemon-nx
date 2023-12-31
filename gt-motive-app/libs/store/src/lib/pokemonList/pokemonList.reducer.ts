import { createReducer, on } from '@ngrx/store';
import * as PokemonListActions from "./pokemonList.actions";
import { PokemonMinifiedDto, PokemonQuery } from '@gt-motive-app/libs/models';

export const POKEMONLIST_FEATURE_KEY = 'pokemonList';

export interface PokemonListState {
    list: PokemonMinifiedDto[],
    selected: PokemonMinifiedDto[],
    query: PokemonQuery
}

export const initialPokemonListState: PokemonListState = {
  list: [],
  selected: [],
  query: {
    currentPage: 0,
    pageSize: 20,
    totalPages: 100,
    totalSize: 20 * 100,
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
        currentPage: state.query.currentPage + 1,
        totalPages: Math.ceil(pokemons.count / state.query.pageSize),
        totalSize: pokemons.count
      }
    })),
    on(PokemonListActions.getNextPokemonListPageRequestError, (state: PokemonListState) => ({
      ...state,
    })),
    on(PokemonListActions.getNextPokemonListPageRequestSuccess, (state: PokemonListState, { pokemons }) => ({
      ...state,
      list: state.list.concat(pokemons.results),
      query: {
        ...state.query,
        currentPage: state.query.currentPage + 1
      }
    })),
    on(PokemonListActions.clearPokemonList, () => ({
      ...initialPokemonListState
    })),
    on(PokemonListActions.setSelectedPokemon, (state: PokemonListState, { pokemon: pokemonName }) => ({
      ...state,
      selected: state.selected.some((selected) =>  selected === pokemonName ) ? 
        state.selected.filter((selected: PokemonMinifiedDto) => selected !== pokemonName) : 
        state.selected.concat([state.list.find((pokemon) => pokemon === pokemonName) as PokemonMinifiedDto])
    })),
    on(PokemonListActions.updatePokemonListQueryFilters, (state: PokemonListState, { filters }) => ({
      ...state,
      query: {
        ...state.query,
        filters: filters
      }
    })),
    // on(PokemonListActions.searchPokemonRequestSuccess, (state: PokemonListState, { pokemon }) => ({
    //   ...state,
    //   query: {
    //     ...state.query,
    //     filters: filters
    //   }
    // }))
);