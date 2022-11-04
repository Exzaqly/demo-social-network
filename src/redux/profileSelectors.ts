import {AppStateType} from "./store";

export const userProfileSelector  = (state: AppStateType) => (
    state.profilePage.profile
)

export const userStatusSelector  = (state: AppStateType) => (
   state.profilePage.status
)

export const userIdSelector  = (state: AppStateType) => (
    state.auth.userId
)

