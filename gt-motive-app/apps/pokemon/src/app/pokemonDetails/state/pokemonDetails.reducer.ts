import { createReducer, on } from '@ngrx/store';
import * as PokemonDetailsActions from "./pokemonDetails.actions";
import { PokemonResponseDto } from '@gt-motive-app/libs/models';

export const POKEMONDETAILS_FEATURE_KEY = 'pokemonDetails';


export interface PokemonDetailsState {
    pokemon?: PokemonResponseDto
}

export const initialPokemonDetailsState: PokemonDetailsState = {
  pokemon: undefined
}

export const pokemonDetailsReducer = createReducer(
    initialPokemonDetailsState,
    on(PokemonDetailsActions.getPokemonByNameRequestSuccess, (state: PokemonDetailsState, { pokemon }) => ({
      ...state,
      pokemon: pokemon
    })),
);