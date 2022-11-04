import {ResultCodes} from "../api/api";
import {PhotosType, PostsType, ProfileType} from "../types/types";
import {BaseThunk, InferActionsType} from "./store";
import {profileAPI} from "../api/profileAPI";


let initialState = {
    posts: [
        {id: 1, message: 'my first post', likesCount: 15},
        {id: 2, message: 'helloooooo', likesCount: 12},
    ] as Array<PostsType>,
    profile: null as ProfileType | null,
    status: '',
}


const profileReducer = (state = initialState, action: Actions): initialStateType => {
    switch (action.type) {
        case "profile/ADD-POST": {
            return {
                ...state,
                posts: [...state.posts, {id: 3, message: action.newPostText, likesCount: 0}],
            }
        }
        case 'profile/SET-PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'profile/SET_STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        case 'profile/DELETE_POST': {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.userId)
            }
        }
        case 'profile/SET_PHOTO': {
            return {
                ...state,
                profile: {...state.profile, photos: action.photo} as ProfileType
            }
        }

        default:
            return state
    }
}

export const actions = {
    setProfile: (profile: ProfileType) => ({type: 'profile/SET-PROFILE', profile} as const),
    addPost: (newPostText: string) => ({type: "profile/ADD-POST", newPostText} as const),
    deletePost: (userId: number) => ({type: 'profile/DELETE_POST', userId} as const),
    setStatus: (status: string) => ({type: 'profile/SET_STATUS', status} as const),
    setPhoto: (photo: PhotosType) => ({type: 'profile/SET_PHOTO', photo} as const),
}



export const getProfile = (userId: number): Thunk => async (dispatch) => {
    const data = await profileAPI.getProfile(userId)
    dispatch(actions.setProfile(data))

}


export const getStatus = (userId: number): Thunk => async (dispatch) => {
    const data = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(data))
}
export const updateStatus = (status: string): Thunk => async (dispatch) => {

    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === ResultCodes.Success) {
        dispatch(actions.setStatus(status))
    }
}


export const loadProfilePhoto = (photo: File): Thunk => async (dispatch) => {
    const data = await profileAPI.loadPhoto(photo)
    if (data.resultCode === ResultCodes.Success) {
        dispatch(actions.setPhoto(data.data.photos))
    }
}

export const saveProfileInfo = (profile: ProfileType): Thunk => async (dispatch, getState) => {
    const data = await profileAPI.saveProfileInfo(profile)
    const userId = getState().auth.userId
    if (data.resultCode === ResultCodes.Success) {
        if (userId !== null){
        dispatch(getProfile(userId))
            }else {
            throw new Error('userId cant be null')
        }

    }
}

export default profileReducer

type initialStateType = typeof initialState
type Actions = InferActionsType<typeof actions>
type Thunk = BaseThunk<Actions>

