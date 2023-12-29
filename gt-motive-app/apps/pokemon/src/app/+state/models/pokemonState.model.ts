import { PokemonResponseDto } from "@gt-motive-app/libs/models";
import { BasePokemonState, PokemonListState } from "@gt-motive-app/store";
import { PokemonDetailsState } from "../../pokemonDetails/state/pokemonDetails.reducer";

export interface PokemonState extends BasePokemonState {
  pokemonDetails: PokemonDetailsState
}