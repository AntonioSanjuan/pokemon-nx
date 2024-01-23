import { createSelector } from '@ngrx/store';
import { selectPokemonState } from '../../+state/pokemon.selectors';
import { PokedexState } from '../../+state/models/pokemonState.model';
import { PokemonDetailsState } from './pokemonDetails.reducer';

export const selectPokemonDetailsState = createSelector(
  selectPokemonState,
  (state: PokedexState) => state.pokemonDetails
);

export const selectPokemonDetails = createSelector(
  selectPokemonDetailsState,
  (state: PokemonDetailsState) => state.pokemon
);
