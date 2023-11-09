import { createSelector } from "@ngrx/store";
import { selectPokemonState } from "../../+state/pokemon.selectors";

export const selectPokemonListState = createSelector(selectPokemonState, state => state.pokemonList)
export const selectPokemonList = createSelector(selectPokemonState, state => state.pokemonList.list)
export const selectPokemonSelected = createSelector(selectPokemonState, state => state.pokemonList.selected)
export const selectPokemonQuery = createSelector(selectPokemonState, state => state.pokemonList.query)