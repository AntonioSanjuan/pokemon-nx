import { initialPokemonListState } from "@gt-motive-app/store";
import { PokemonState } from "./pokemonState.model";

export const initialPokemonState: PokemonState = {
    // set initial required properties
    pokemonList: initialPokemonListState,
}
