import { createAction, props } from "@ngrx/store";

export const showError = createAction(
    '[Error/API] show error message', props<{errorMessage: string}>())