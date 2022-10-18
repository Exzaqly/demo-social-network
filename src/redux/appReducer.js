import {getAuth} from "./authReducer";


const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'


let initialState = {
    initialized: false,
}


const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}

const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) =>{
    Promise.all([dispatch(getAuth())])
        .then( () => {
                dispatch(initializedSuccess())
            }
        )
}




export default appReducer