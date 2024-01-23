import { createFeatureSelector } from '@ngrx/store';
import { ComparisonState } from './models/pokemonState.model';
import { COMPARISON_FEATURE_KEY } from './comparison.reducer';

export const selectComparisonState =
  createFeatureSelector<ComparisonState>(COMPARISON_FEATURE_KEY);