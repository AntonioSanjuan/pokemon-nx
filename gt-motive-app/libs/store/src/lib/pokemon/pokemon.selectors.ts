import { createFeatureSelector } from "@ngrx/store";
import { BasePokemonState } from "./pokemon.reducer";

export const POKEMON_FEATURE_KEY = 'pokemon';

export const selectPokemonFeature = createFeatureSelector<BasePokemonState>(POKEMON_FEATURE_KEY);
