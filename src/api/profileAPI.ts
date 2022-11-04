import {PhotosType, ProfileType} from "../types/types";
import {DefaultResponse, instance} from "./api";


export const profileAPI = {
    getProfile: (userId: number) => (
        instance.get<ProfileType>(`profile/${userId}`)
            .then(response => response.data)
    ),
    getStatus: (userId: number) => (
        instance.get<string>(`profile/status/${userId}`)
            .then(response => response.data)
    ),
    updateStatus: (status: string) => (
        instance.put<DefaultResponse>('profile/status', {status})
            .then(response => response.data)
    ),
    loadPhoto: (photo: File) => {
        const formData = new FormData()
        formData.append("image", photo)
        return (
            instance.put<PutPhotoResponse>('profile/photo', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => response.data)
        )
    },
    saveProfileInfo: (profile: ProfileType) => (
        instance.put<DefaultResponse>('profile', profile)
            .then(response => response.data)
    )

}
type PutPhotoResponse = {
    data: { photos: PhotosType }
    resultCode: number
    messages: Array<string>
}