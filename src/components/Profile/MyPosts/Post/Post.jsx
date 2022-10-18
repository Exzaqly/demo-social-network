import c from './Post.module.css'

const Post = (props) => {
    return (
        <div className={c.item}>
            <img src="https://abrakadabra.fun/uploads/posts/2022-01/1642710388_4-abrakadabra-fun-p-avatarka-sinyaya-7.jpg" alt=""/>
            {props.message}
            <div>
                like
                {props.likesCount}
            </div>
        </div>
    )
}

export default Post