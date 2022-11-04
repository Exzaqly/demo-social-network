import c from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/img/user.png"
import ProfileStatus from "./ProfileStatus";
import React, {ChangeEvent, useState} from "react";
import ProfileDataForm from "./ProfileDataForm";
import {ContactsType, ProfileType} from "../../../types/types";
import profile from "../Profile";
import {SubmitHandler} from "react-hook-form";


const ProfileInfo: React.FC<ProfileInfoProps> = (props) => {
    const [editMode, setEditMode] = useState(false)


    if (!props.profile) {
        return <Preloader/>
    }
    const onSubmit: SubmitHandler<ProfileType> = formData => {
        debugger
        props.saveProfileInfo(formData).then(() => {
            setEditMode(false)
        })

    }

    const onProfilePhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.loadProfilePhoto(e.target.files[0])
        }
    }
   const goToEditMode = () => {setEditMode(true)}
    return (
        <div>
            <div className={c.description_block}>
                <img src={props.profile.photos.large !== null ? props.profile.photos.large : userPhoto} alt=""/>
                {props.isOwner && <div><input type={"file"} onChange={onProfilePhotoSelected}/></div>}
                {editMode
                    ? <ProfileDataForm profile={props.profile} isOwner={props.isOwner} onSubmit ={onSubmit} />
                    : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode= {goToEditMode} />}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>

    )

}

const ProfileData: React.FC<ProfileDataProps> = (props) => (
    <div>
        {props.isOwner &&
            <div>
                <button onClick={props.goToEditMode}>edit Profile
                </button>
            </div>
        }
        <div>
            <b>Full name</b> : {props.profile.fullName}
        </div>

        <div className={c.description_smile}>
            <b>Looking for a job?</b> :
            {props.profile.lookingForAJob ?
                <img src="https://papik.pro/uploads/posts/2022-08/1661935424_1-papik-pro-p-smailik-da-png-1.png"
                     alt=""/> :
                <img src="https://www.besaport.ru/images/09/smiliki/smailik12.png" alt=""/>}
        </div>
        {props.profile.lookingForAJob && <div>
            <b>My skills</b> : {props.profile.lookingForAJobDescription}
        </div>}
        <div>
            <b>About me</b> : {props.profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b> : {Object.keys(props.profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key as keyof ContactsType]}/>
        })}
        </div>

    </div>
)

const Contact: React.FC<ContactProps> = ({contactTitle, contactValue}) => (
    <div className={c.contact}>
        <b>{contactTitle}</b> : {contactValue}
    </div>
)


export default ProfileInfo

type ContactProps = {
    contactTitle: string
    contactValue: string
}


type ProfileDataProps = {
    goToEditMode: () => void
    isOwner: boolean
    profile: ProfileType
}


type ProfileInfoProps = {
    profile : ProfileType | null
    status: string
    isOwner: boolean
    loadProfilePhoto: (file: File) => void
    updateStatus: (status: string) => void
    saveProfileInfo: (profile: ProfileType) => Promise<ProfileType>

}
