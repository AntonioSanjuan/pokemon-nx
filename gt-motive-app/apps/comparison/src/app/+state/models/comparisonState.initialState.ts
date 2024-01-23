import { ComparisonState } from "./pokemonState.model";
import { POKEMONCOMPARISON_FEATURE_KEY, initialPokemonComparisonState } from '@gt-motive-app/store';

export const initialComparisonState: ComparisonState = {
    // set initial required properties
    [POKEMONCOMPARISON_FEATURE_KEY]: initialPokemonComparisonState
}