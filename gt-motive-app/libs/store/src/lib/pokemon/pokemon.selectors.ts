import { createFeatureSelector } from "@ngrx/store";
import { BasePokemonState } from "./pokemon.reducer";

export const selectPokemonFeature = createFeatureSelector<BasePokemonState>('pokemon');
