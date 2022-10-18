import React from "react";
import {addPost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";




const mapStateToProps = (state) => ({
        posts: state.profilePage.posts,
    })



export default connect(mapStateToProps, { addPost,})(MyPosts)