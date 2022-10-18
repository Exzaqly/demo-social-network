import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 200,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    portionSize: 25
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS: {
            return {...state, users: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowing = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING, isFetching, userId})


export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    const data = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))


}

async function followUnfollowFlow(dispatch, userId, actionCreator, APIMethod) {
    dispatch(toggleIsFollowing(true, userId))
    const data = await APIMethod(userId)

    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowing(false, userId))
}

export const follow = (userId) => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, followSuccess,  usersAPI.getFollow)
}
export const unfollow = (userId) => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, unfollowSuccess, usersAPI.getUnfollow)
}

export default usersReducer