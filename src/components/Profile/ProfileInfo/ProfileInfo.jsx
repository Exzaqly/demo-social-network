import c from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/img/user.png"

import ProfileStatusWithHooks from "./ProfileStatusWithHooks";




const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
           {/* <div>
                <img
                    src="https://mywowo.net/media/images/cache/dubai_img_worlds_of_adventure_01_presentazione_jpg_1200_630_cover_85.jpg"
                    alt=""/>
            </div>*/}
            <div  className={c.description_block}>
                <img src={props.profile.photos.large !== null ? props.profile.photos.large : userPhoto} alt=""/>
                <h3>{props.profile.fullName}</h3>
                <ProfileStatusWithHooks status = {props.status} updateStatus = {props.updateStatus} />
                <div className={c.description_smile}>Ищу работу: {props.profile.lookingForAJob?  <img src="https://papik.pro/uploads/posts/2022-08/1661935424_1-papik-pro-p-smailik-da-png-1.png" alt=""/> :
                    <img src="https://www.besaport.ru/images/09/smiliki/smailik12.png" alt=""/>}</div>
            </div>
        </div>

          )

}

export default ProfileInfo