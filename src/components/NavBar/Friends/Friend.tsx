import c from './Friend.module.css'
import {NavLink} from "react-router-dom";
import {FC} from "react";


const Friend: FC<Props> = (props) => {
    return (
        <div className={c.friend}>
            <img src={props.avatar} alt=""/>
            <h3 className={c.name}>{props.name}</h3>
        </div>
    )
}

export default Friend

type Props =  {
    avatar: string
    name : string
}