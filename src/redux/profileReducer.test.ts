import profileReducer, {actions} from "./profileReducer";
import {PostsType, ProfileType} from "../types/types";



let state = {
    posts: [
        {id: 1, message: 'my first post', likesCount: 15},
        {id: 2, message: 'helloooooo', likesCount: 12},
    ] as Array<PostsType>,
    profile: null as ProfileType | null,
    profileUpdateStatus: null,
    status: '',
}


it('posts should be decrement',  () => {

    let action = actions.deletePost(1)


    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(1)
});