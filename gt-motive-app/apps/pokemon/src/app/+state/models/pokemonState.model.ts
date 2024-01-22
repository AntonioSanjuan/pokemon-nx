import { PokedexState } from "@gt-motive-app/store";
import { PokemonDetailsState } from "../../pokemonDetails/state/pokemonDetails.reducer";

export interface PokemonState extends PokedexState {
  pokemonDetails: PokemonDetailsState
}