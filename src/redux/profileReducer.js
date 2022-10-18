import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST"
const SET_PROFILE = 'SET-PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

let initialState = {
    posts: [
        {id: 1, message: 'my first post', likesCount: '15'},
        {id: 2, message: 'helloooooo', likesCount: '12'},
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: action.newPostText, likesCount: 0}],
            }
        }
        case SET_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.userId)
            }
        }
        default:
            return state
    }
}



const setProfile = (profile) => ({type: SET_PROFILE, profile})
export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const deletePost = (userId) => ({type: DELETE_POST, userId})
const setStatus = (status) => ({type: SET_STATUS, status})

export const getProfile = (userId) => (dispatch) =>{
    profileAPI.getProfile(userId)
        .then(data => {
            dispatch(setProfile(data))
        })
}


export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setStatus(data))
        })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}

export default profileReducer