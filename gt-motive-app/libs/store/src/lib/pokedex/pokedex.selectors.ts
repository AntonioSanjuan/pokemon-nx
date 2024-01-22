import { createFeatureSelector } from "@ngrx/store";
import { PokedexState } from "./pokedex.reducer";

export const POKEDEX_FEATURE_KEY = 'pokedex';

export const selectPokedexFeature = createFeatureSelector<PokedexState>(POKEDEX_FEATURE_KEY);
