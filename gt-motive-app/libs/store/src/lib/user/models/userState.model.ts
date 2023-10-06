import { LoginResponseDto } from "@gt-motive-app/libs/models";

export interface UserState {
    user: LoginResponseDto | undefined
}