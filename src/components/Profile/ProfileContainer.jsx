import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, setProfile, updateStatus} from "../../redux/profileReducer";
import withRouter from "../../hoc/withRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getAuth} from "../../redux/authReducer";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId
        if(!userId){
            userId = this.props.authorizedUserId
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)

    }

    render() {
        return <Profile {...this.props} profile = {this.props.profile} status = {this.props.status} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId
})


export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, getAuth}),
    withRouter,
    withAuthRedirect,
    )(ProfileContainer)
