import { createAction, props } from "@ngrx/store"
import { LoginResponseDto } from "@gt-motive-app/libs/models"

export const SET_USER = 'SET_USER'
export const setUser = createAction(SET_USER, props<{ user: LoginResponseDto }>())
export const CLEAR_USER = 'CLEAR_USER'
export const clearUser = createAction(CLEAR_USER)
