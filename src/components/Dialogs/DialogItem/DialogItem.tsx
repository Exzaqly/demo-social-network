import c from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {FC} from "react";


const DialogItem: FC<Props> = (props) => {
    return(
     <div className={c.dialog}>
         <div className={c.dialog_img}>
             <img src="././DialogItem" alt=""/>
         </div>
         <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
     </div>
    )
}

export default DialogItem


type Props = {
    id: number
    name: string
}
