import c from './Post.module.css'
import {MessageType} from "../../../../types/types";
import React from "react";

const Post: React.FC<Props> = (props) => {
    return (
        <div className={c.item}>
            <div>
            <img src="https://abrakadabra.fun/uploads/posts/2022-01/1642710388_4-abrakadabra-fun-p-avatarka-sinyaya-7.jpg" alt=""/>
            </div>
            <div>
                {props.message}
            </div>

            <div>
                like
                {props.likesCount}
            </div>
        </div>

    )
}

export default Post

type Props = {
    message: string,
    likesCount: number
}