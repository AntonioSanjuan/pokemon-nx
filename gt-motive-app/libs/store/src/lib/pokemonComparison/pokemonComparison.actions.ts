import { PokemonResponseDto } from '@gt-motive-app/libs/models';
import { createAction, props } from '@ngrx/store';

export const getComparisonPokemonsRequest = createAction('[Pokemon/PokemonComparison/API] getComparisonPokemonsRequest Request', props<{ pokemonNames: string[]}>())
export const getComparisonPokemonsSuccess = createAction('[Pokemon/PokemonComparison/API] getComparisonPokemonsRequest Success', props<{ pokemons: PokemonResponseDto[]}>())
export const getComparisonPokemonsError = createAction('[Pokemon/PokemonComparison/API] getComparisonPokemonsRequest Error')

export const selectComparisonPokemon = createAction(
  '[Pokemon/PokemonComparison/API] selectComparisonPokemon', props<{ pokemon: PokemonResponseDto}>())

export const unselectComparisonPokemon = createAction(
  '[Pokemon/PokemonComparison/API] unselectComparisonPokemon', props<{ pokemonName: string }>())