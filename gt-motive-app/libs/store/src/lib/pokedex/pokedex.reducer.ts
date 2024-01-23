import { POKEMONFILTERS_FEATURE_KEY, PokemonFiltersState, initialPokemonFiltersState } from "../pokemonFilters";
import { POKEMONLIST_FEATURE_KEY, PokemonListState, initialPokemonListState } from "../pokemonList";

export const pokedexInitialState = {
  [POKEMONFILTERS_FEATURE_KEY]: initialPokemonFiltersState,
  [POKEMONLIST_FEATURE_KEY]: initialPokemonListState,
}

export interface BasePokedexState {
    [POKEMONLIST_FEATURE_KEY]: PokemonListState
    [POKEMONFILTERS_FEATURE_KEY]: PokemonFiltersState
  }