import React from "react";
import c from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControl/FormControl";
import {maxLengthCreator, required} from "../../../utils/validators";

const maxLength30 = maxLengthCreator(30)

const AddPostsForm = reduxForm({form: 'profileAddPost'})( (props) => (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'newPostBody'} placeholder={'your post'} validate={[required, maxLength30 ]} component={Textarea}/>
        </div>
        <div>
            <button>send</button>
        </div>
    </form>
)
)

const MyPosts = (props) => {


const addNewPost = (values) => {
        props.addPost(values.newPostBody)
    }

    let postElements = props.posts.map(post => ( <Post message={post.message} ññ likesCount={post.likesCount}/>))
    return (
        <div className={c.posts_block}>
            <h3>My posts</h3>
            <AddPostsForm onSubmit = {addNewPost}/>
            <div className={c.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts