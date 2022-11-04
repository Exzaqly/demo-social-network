import {getAuth} from "./authReducer";
import {AppDispatch, InferActionsType} from "./store";


export type initialStateType =  typeof initialState

let initialState = {
    initialized: false,
}

type ActionsType = InferActionsType<typeof actions>


const appReducer = (state = initialState, action: ActionsType): initialStateType => {

    switch (action.type) {
        case 'app/INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}


const actions = {
    initializedSuccess: () => ({type: 'app/INITIALIZED_SUCCESS'} as const),
}

export const initializeApp = () => (dispatch: AppDispatch) => {
    Promise.all([dispatch(getAuth())])
        .then(() => {
                dispatch(actions.initializedSuccess())
            }
        )
}


export default appReducer