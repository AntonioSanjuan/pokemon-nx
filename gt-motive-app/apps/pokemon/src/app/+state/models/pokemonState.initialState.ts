import { initialPokemonListState } from "../../pokemonList/store/pokemonList.reducer";
import { PokemonState } from "./pokemonState.model";

export const initialPokemonState: PokemonState = {
    // set initial required properties
    pokemonList: initialPokemonListState,
}
