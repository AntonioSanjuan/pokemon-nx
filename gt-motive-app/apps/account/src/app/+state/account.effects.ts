import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as AccountActions from './account.actions';
import * as AccountFeature from './account.reducer';

@Injectable()
export class AccountEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountActions.initAccount),
      switchMap(() => of(AccountActions.loadAccountSuccess({ account: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(AccountActions.loadAccountFailure({ error }));
      })
    )
  );
}
