import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
;



const Users = (props) => {
    return (
        <div>
            <Paginator totalItemsCount = {props.totalUsersCount}  pageSize={props.pageSize}
                       currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} portionSize = {props.portionSize} />
            {props.users.map(user => <User key={user.id} user = {user} follow={props.follow} followingInProgress={props.followingInProgress} unfollow={props.unfollow} />
            )}
        </div>

    )


}

export default Users