import {DefaultResponse, ResultCodes} from "../api/api";
import {UserType} from "../types/types";
import {Dispatch} from "redux";
import {BaseThunk, InferActionsType} from "./store";
import {usersAPI} from "../api/usersAPI";

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 200,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>,
    portionSize: 25,
    filter: {
        term: '',
        friend: "null" as "null" | "true" | "false",
    }
}



const usersReducer = (state = initialState, action: Actions): InitialStateType => {
    switch (action.type) {
        case 'users/FOLLOW':
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case 'users/UNFOLLOW':
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case 'users/SET-USERS': {
            return {...state, users: [...action.users]}
        }
        case 'users/SET-CURRENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'users/SET-TOTAL-USERS-COUNT': {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case 'users/TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'users/TOGGLE_IS_FOLLOWING': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        case 'users/SET-FILTER': {
            return {
                ...state,
                filter: action.filter
            }
        }
        default:
            return state
    }
}





 const actions = {
    followSuccess: (userId: number) => ({type: 'users/FOLLOW', userId} as const),
    unfollowSuccess: (userId: number) => ({type: 'users/UNFOLLOW', userId} as const),
    setUsers: (users: Array<UserType>) => ({type: 'users/SET-USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({type: 'users/SET-CURRENT-PAGE', currentPage} as const),
    setTotalUsersCount: (totalUsersCount: number) => ({
        type: 'users/SET-TOTAL-USERS-COUNT',
        totalUsersCount
    } as const),
    toggleIsFetching: (isFetching: boolean) => ({
        type: 'users/TOGGLE-IS-FETCHING',
        isFetching
    } as const),
    toggleIsFollowing: (isFetching: boolean, userId: number) => ({
        type: 'users/TOGGLE_IS_FOLLOWING',
        isFetching,
        userId
    } as const),
     setFilter: (filter: Filter) => ({type: 'users/SET-FILTER', filter} as const)
}

export const requestUsers = (currentPage: number, pageSize: number, filter: Filter): Thunk => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true))
    dispatch(actions.setCurrentPage(currentPage))
    dispatch(actions.setFilter(filter))
    const data = await usersAPI.getUsers(currentPage, pageSize, filter)

    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.setUsers(data.items))
    dispatch(actions.setTotalUsersCount(data.totalCount))


}

async function _followUnfollowFlow(dispatch: Dispatch<Actions>, userId: number, actionCreator: (userId: number) => Actions, APIMethod: (userId: number) => Promise<DefaultResponse>) {
    dispatch(actions.toggleIsFollowing(true, userId))
    const data = await APIMethod(userId)

    if (data.resultCode === ResultCodes.Success) {
        dispatch(actionCreator(userId))
    }
    dispatch(actions.toggleIsFollowing(false, userId))
}

export const follow = (userId: number): Thunk => async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, actions.followSuccess, usersAPI.getFollow)
}
export const unfollow = (userId: number): Thunk => async (dispatch) => {
    await _followUnfollowFlow(dispatch, userId, actions.unfollowSuccess, usersAPI.getUnfollow)
}

export default usersReducer


type InitialStateType = typeof initialState
type Thunk = BaseThunk<Actions>
export type Filter = typeof initialState.filter
type Actions = InferActionsType<typeof actions>