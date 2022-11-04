import React from "react";
import c from './Users.module.css'
import userPhoto from '../../assets/img/user.png'
import {NavLink} from "react-router-dom";
import {UserType} from "../../types/types";

type Props = {
    user: UserType,
    followingInProgress: Array<number>,
    unfollow: (id: number) => void,
    follow: (id: number) => void
}



const User: React.FC<Props> = ({user, followingInProgress, unfollow, follow}) => {
    return (<div  className={c.item}>

                    <div className={c.avatar}>
                        <div className={c.photo}>
                            <NavLink to={"/profile/" + user.id}>
                                <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt=""/>
                            </NavLink>
                        </div>
                        <div className={c.button}>
                            {user.followed ?
                                <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                    unfollow(user.id)
                                }}>Unfollow</button> :
                                <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                    follow(user.id)

                                }}>Follow</button>}
                        </div>
                    </div>
                    <div className={c.content}>

                        <div className={c.info}>
                            <h3>{user.name}</h3>
                            <span>{user.status}</span>
                        </div>
                        <div className={c.location}>
                            <h3>{'user.location.country'}</h3>
                            <span>{'user.location.city'}</span>
                        </div>
                    </div>
                </div>
            )




}

export default User