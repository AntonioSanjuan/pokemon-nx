import { BasePokedexState } from "@gt-motive-app/store";
import { PokemonDetailsState } from "../../pokemonDetails/state/pokemonDetails.reducer";

export interface PokedexState extends BasePokedexState {
  pokemonDetails: PokemonDetailsState
}