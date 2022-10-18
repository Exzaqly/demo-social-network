import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET-USER-DATA'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

export const getAuth = () => async (dispatch) => {
    const data = await authAPI.me()
    if (data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }

}

export const postLogin = (email, password, rememberMe) => async (dispatch) => {
  const data = await authAPI.login(email, password, rememberMe)
            if (data.resultCode === 0) {
                dispatch(getAuth())
            } else {
                dispatch(stopSubmit('login', {_error: `${data.messages[0]}`}))
            }
}
export const logout = () => async (dispatch) => {
   const data = await authAPI.logout()
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
}

export default authReducer