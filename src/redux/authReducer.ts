import {ResultCodeCaptcha, ResultCodes} from "../api/api";
import {BaseThunk, InferActionsType} from "./store";
import {authAPI} from "../api/authAPI";
import {securityAPI} from "../api/securityAPI";


let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null ,
}



const authReducer = (state = initialState, action: Actions): initialStateType => {

    switch (action.type) {
        case  'auth/SET-USER-DATA':
        case 'auth/GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}



const actions = {
    getCaptchaUrlSuccess: (captchaUrl: string) => ({
        type: 'auth/SET-USER-DATA',
        payload: {captchaUrl}
    } as const),


    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: 'auth/GET_CAPTCHA_URL_SUCCESS',
        payload: {userId, email, login, isAuth}
    } as const)
}

export const getAuth = (): BaseThunk<Actions> => async (dispatch) => {
    const data = await authAPI.me()
    if (data.resultCode === ResultCodes.Success) {
        let {id, email, login} = data.data
        dispatch(actions.setAuthUserData(id, email, login, true))
    }
}


export const postLogin = (email: string, password: string, rememberMe: boolean, captcha?: string): Thunk => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodes.Success) {
       await dispatch(getAuth())
    } else if (data.resultCode === ResultCodeCaptcha.CaptchaIsRequired) {
       await dispatch(getCaptchaUrl())
    }
}
export const logout = (): Thunk => async (dispatch) => {
    const data = await authAPI.logout()
    if (data.resultCode === ResultCodes.Success) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}
export const getCaptchaUrl = (): Thunk => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    dispatch(actions.getCaptchaUrlSuccess(data.url))

}


export default authReducer


type initialStateType = typeof initialState
type Actions = InferActionsType<typeof actions>
type Thunk = BaseThunk<Actions>