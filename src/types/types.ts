import {AppStateType} from "../redux/store";

export type PostsType = {
    id: number,
    message: string,
    likesCount: number
}

export type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string,
}

export type PhotosType = {
    small: string | null,
    large: string | null,
}

export type ProfileType = {
    userId: number | null,
    aboutMe: string | null
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    contacts: ContactsType,
    photos: PhotosType
}

export type UserType = {
    id: number,
    name: string,
    status: string
    photos: PhotosType,
    followed: boolean,
}

export type DialogType = {
    id : number,
    name: string
}
export type  MessageType = {
    id : number,
    message: string
}



export type FriendsType = {
    id: number,
    name: string,
    avatar: string
}