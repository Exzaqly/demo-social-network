import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../types/types";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../redux/store";
import {useParams} from "react-router-dom";
import {getProfile, getStatus, loadProfilePhoto, saveProfileInfo, updateStatus} from "../../redux/profileReducer";
import {userIdSelector, userProfileSelector, userStatusSelector} from "../../redux/profileSelectors";


export const Profile: React.FC = () => {

    const profile = useSelector(userProfileSelector)
    const status = useSelector(userStatusSelector)
    const authorizedUserId = useSelector(userIdSelector)
    const {userId} = useParams()
    const dispatch: AppDispatch = useDispatch()

    const isOwner = !userId
    const saveProfileInfoCallback = (profile : ProfileType): any => {
        dispatch(saveProfileInfo)

    }
    const loadProfilePhotoCallback = (file: File) => {
        dispatch(loadProfilePhoto)
    }
    const updateStatusCallback = (status: string) => {
        dispatch(updateStatus)
    }

    useEffect(() => {
        refreshProfile()
    }, [userId])

    const refreshProfile = () => {
        let CurrentUserId: number | null
        userId ? CurrentUserId = +userId : CurrentUserId = authorizedUserId
        if(!CurrentUserId){
            console.error('userId in should exist in URI or in state')
        }else {
            dispatch (getProfile(CurrentUserId))
            dispatch(getStatus(CurrentUserId))
        }
    }

    return (
        <div >
            <ProfileInfo saveProfileInfo = {saveProfileInfoCallback} loadProfilePhoto = {loadProfilePhotoCallback}
                         isOwner = {isOwner} profile = {profile} status = {status}
                         updateStatus = {updateStatusCallback}/>
           <MyPostsContainer />
        </div>
    )
}

export default Profile



