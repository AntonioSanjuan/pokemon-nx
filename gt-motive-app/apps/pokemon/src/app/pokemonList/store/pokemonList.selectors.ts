import { createSelector } from "@ngrx/store";
import { selectPokemonState } from "../../+state/pokemon.selectors";

export const selectPokemonListState = createSelector(selectPokemonState, state => state.pokemonList)