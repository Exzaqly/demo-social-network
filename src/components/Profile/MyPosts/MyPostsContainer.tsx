import React from "react";
import {actions} from "../../../redux/profileReducer";
import MyPosts, {MapDispatchProps, MapStateProps} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store";


const mapStateToProps = (state: AppStateType) => ({
        posts: state.profilePage.posts,
    })



export default connect<MapStateProps, MapDispatchProps, {} , AppStateType>(mapStateToProps, { addPost: actions.addPost})(MyPosts)

