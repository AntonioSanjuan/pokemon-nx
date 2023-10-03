import { createAction, props } from '@ngrx/store';
import { AccountEntity } from './account.models';

export const initAccount = createAction('[Account Page] Init');

export const loadAccountSuccess = createAction(
  '[Account/API] Load Account Success',
  props<{ account: AccountEntity[] }>()
);

export const loadAccountFailure = createAction(
  '[Account/API] Load Account Failure',
  props<{ error: any }>()
);
