import React from "react";
import c from "./ProfileInfo.module.css";
import {useForm} from "react-hook-form";
import {ProfileType} from "../../../types/types";
import {Error} from "../../common/FormControl/FormControl";


const ProfileDataForm: React.FC<Props> = (props) => {
    const {
        register,
        handleSubmit,
        formState: {errors},

    } = useForm<ProfileType>({
            mode: "onChange",
            defaultValues: {
                fullName: props.profile.fullName,
                lookingForAJob: props.profile.lookingForAJob,
                lookingForAJobDescription: props.profile.lookingForAJobDescription,
                aboutMe: props.profile.aboutMe,
                contacts: props.profile.contacts
            }
        }
    )


    return (
        <form onSubmit={handleSubmit(props.onSubmit)}>

            <div>
                <b>Full name</b> : <input {...register('fullName', {
                required: 'Name is require field!'
            })} placeholder={'Full name'}/>
            </div>
            {
                errors?.fullName && <Error error={errors.fullName.message}/>
            }
            <div>
                <b>Looking for a job?</b> : <input {...register("lookingForAJob",)} type={'checkbox'}/>
            </div>

            <div>
                <b>My skills</b> : <input  {...register("lookingForAJobDescription",
            )} placeholder={'Your skills '}/>
            </div>

            <div>
                <b>About me</b> : <input  {...register("aboutMe",)} placeholder={'Tell about yourself '}/>
            </div>
            <div>
                <b>Contacts</b> : {Object.keys(props.profile.contacts).map(key => {
                return <div key={key} className={c.contact}>
                    {key} : <input  {...register(`contacts.${key as Key}`)}
                                    placeholder={key}/>
                </div>
            })}
            </div>

            {props.isOwner &&
                <div>
                    <button>Save</button>

                </div>
            }
        </form>
    )
}




export default ProfileDataForm

type Props = {
    profile: ProfileType
    isOwner: boolean
    onSubmit: (data: ProfileType) => Promise<ProfileType>
}

type Key = 'github' | 'vk' | 'facebook' | 'instagram' | 'twitter' | 'website' | 'youtube' | 'mainLink'

