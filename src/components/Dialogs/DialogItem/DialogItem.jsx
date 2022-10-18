import c from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return(
     <div className={c.dialog}>
         <div className={c.dialog_img}>
             <img src="./DialogItem" alt=""/>
         </div>
         <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
     </div>
    )
}

export default DialogItem
