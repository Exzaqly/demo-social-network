import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserSearchForm} from "./UserSearchForm";
import {follow, requestUsers, unfollow} from "../../redux/usersReducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getPortionSize,
    getTotalUsersCount,
    getUsersFilter,
    getUsersSelector
} from "../../redux/usersSelectors";
import {AppDispatch} from "../../redux/store";

type Props = {
}



export const Users: React.FC<Props> = (props) => {
    const followingInProgress = useSelector(getFollowingInProgress)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const portionSize = useSelector(getPortionSize)
    const users = useSelector(getUsersSelector)
    const filter = useSelector(getUsersFilter)

    const dispatch: AppDispatch = useDispatch()

    const setCurrentPage = (page: number) => {
        dispatch(requestUsers(page, pageSize, filter))
    }

    const onFollow = (userId: number) => {
        dispatch(follow(userId))
    }
    const onUnfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }

    return (
        <div>
            <UserSearchForm />
            <Paginator totalItemsCount = {totalUsersCount}  pageSize={pageSize}
                       currentPage={currentPage} setCurrentPage={setCurrentPage} portionSize = {portionSize} />
            {users.map(user => <User key={user.id} user = {user} follow={onFollow} followingInProgress={followingInProgress} unfollow={onUnfollow} />
            )}
        </div>

    )


}



