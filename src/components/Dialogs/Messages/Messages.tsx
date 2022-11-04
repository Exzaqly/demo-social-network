import c from '../Dialogs.module.css'
import {FC} from "react";

const Message: FC<Props> = (props) => {
    return(
        <div className={c.message}>{props.message}</div>
    )
}

export default Message


type Props = {
    message: string
}
