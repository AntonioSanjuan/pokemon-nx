import { POKEMONLIST_FEATURE_KEY, initialPokemonListState } from "@gt-motive-app/store";
import { PokemonState } from "./pokemonState.model";
import { PokemonResponseDto } from "@gt-motive-app/libs/models";
import { POKEMONDETAILS_FEATURE_KEY, initialPokemonDetailsState } from "../../pokemonDetails/state/pokemonDetails.reducer";

export const initialPokemonState: PokemonState = {
    // set initial required properties
    [POKEMONLIST_FEATURE_KEY]: initialPokemonListState,
    [POKEMONDETAILS_FEATURE_KEY]: initialPokemonDetailsState
}
