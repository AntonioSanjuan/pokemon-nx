import { PokemonState } from "./pokemonState.model";
import { POKEMONDETAILS_FEATURE_KEY, initialPokemonDetailsState } from "../../pokemonDetails/state/pokemonDetails.reducer";
import { basePokemonInitialState } from '@gt-motive-app/store';

export const initialPokemonState: PokemonState = {
    // set initial required properties
    ...basePokemonInitialState,
    [POKEMONDETAILS_FEATURE_KEY]: initialPokemonDetailsState
}
