import { PokedexState } from "./pokemonState.model";
import { POKEMONDETAILS_FEATURE_KEY, initialPokemonDetailsState } from "../../pokemonDetails/state/pokemonDetails.reducer";
import { pokedexInitialState } from '@gt-motive-app/store';

export const initialPokemonState: PokedexState = {
    // set initial required properties
    ...pokedexInitialState,
    [POKEMONDETAILS_FEATURE_KEY]: initialPokemonDetailsState
}
