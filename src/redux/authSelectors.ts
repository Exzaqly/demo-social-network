import {AppStateType} from "./store";

export const getIsAuth = (state: AppStateType) => (
    state.auth.isAuth
)
export const getCaptchaUrl = (state: AppStateType) => (
    state.auth.captchaUrl
)