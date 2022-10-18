import c from './Friend.module.css'
import {NavLink} from "react-router-dom";


const Friend = (props) => {
    return (
        <div className={c.friend}>
            <img src={props.avatar} alt=""/>
            <h3 className={c.name}>{props.name}</h3>
        </div>
    )
}

export default Friend