import React, {FC} from "react";
import c from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../types/types";
import {SubmitHandler, useForm} from "react-hook-form";
import {Error} from "../../common/FormControl/FormControl";



const AddPostsForm:FC<MapDispatchProps> = (props) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<Post>({
    mode: "onChange"
    })

    const addNewPost: SubmitHandler<Post> = (data) => {
        props.addPost(data.newPostText)
        reset()
    }
  return  <form onSubmit={handleSubmit(addNewPost)}>
        <div>
            <textarea {...register('newPostText', {
                required: 'required area!',
                maxLength: 30,
            })} placeholder={'your post'}/>
        </div>
      {errors?.newPostText && <Error error={errors.newPostText.message} /> }
        <div>
            <button>send</button>
        </div>
    </form>
}


const MyPosts: React.FC<MapStateProps & MapDispatchProps> = (props) => {




    let postElements = props.posts.map(post => ( <Post key = {post.id} message={post.message} likesCount={post.likesCount}/>))
    return (
        <div className={c.posts_block}>
            <h3>My posts</h3>
            <AddPostsForm addPost={props.addPost}/>
            <div className={c.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts


export type MapStateProps = {
    posts: Array<PostsType>
}
 export type MapDispatchProps = {
    addPost: (newPostText: string) => void
}

type Post = {
    newPostText: string
}