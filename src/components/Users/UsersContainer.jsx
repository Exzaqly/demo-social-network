import {connect} from "react-redux";
import {
    follow,
    requestUsers,
    unfollow,
} from "../../redux/usersReducer";
import Users from "./Users";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress, getIsFetching,
    getPageSize, getPortionSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/usersSelectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    setCurrentPage = (page) => {
        this.props.getUsers(page, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                users={this.props.users}
                setCurrentPage={this.setCurrentPage}
                pageSize={this.props.pageSize}
                followingInProgress={this.props.followingInProgress}
                portionSize= {this.props.portionSize} />
        </>
    }
}


const mapStateToProps = (state) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    portionSize: getPortionSize(state)
})


export default connect(mapStateToProps,
    {getUsers: requestUsers, follow, unfollow}
)(UsersContainer)