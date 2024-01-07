import { BasePokemonState } from "@gt-motive-app/store";
import { PokemonDetailsState } from "../../pokemonDetails/state/pokemonDetails.reducer";

export interface PokemonState extends BasePokemonState {
  pokemonDetails: PokemonDetailsState
}