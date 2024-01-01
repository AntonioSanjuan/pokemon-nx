import { POKEMONFILTERS_FEATURE_KEY, PokemonFiltersState } from "../pokemonFilters";
import { POKEMONLIST_FEATURE_KEY, PokemonListState } from "../pokemonList";

export interface BasePokemonState {
    [POKEMONLIST_FEATURE_KEY]: PokemonListState
    [POKEMONFILTERS_FEATURE_KEY]: PokemonFiltersState
  }