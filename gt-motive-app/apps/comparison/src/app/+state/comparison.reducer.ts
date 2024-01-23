import { Action, combineReducers } from '@ngrx/store';
import { initialComparisonState } from './models/comparisonState.initialState';
import { ComparisonState } from './models/pokemonState.model';
import { POKEMONCOMPARISON_FEATURE_KEY, pokemonComparisonReducer } from '@gt-motive-app/store';

export const COMPARISON_FEATURE_KEY = "comparison";

export const comparisonReducer = (state: ComparisonState = initialComparisonState, action: Action) => 
  combineReducers({
    [POKEMONCOMPARISON_FEATURE_KEY]: pokemonComparisonReducer,
  }, initialComparisonState)(state, action)

