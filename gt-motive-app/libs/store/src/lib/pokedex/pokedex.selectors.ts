import { createFeatureSelector } from "@ngrx/store";
import { BasePokedexState } from "./pokedex.reducer";

export const POKEDEX_FEATURE_KEY = 'pokedex';

export const selectPokedexFeature = createFeatureSelector<BasePokedexState>(POKEDEX_FEATURE_KEY);
