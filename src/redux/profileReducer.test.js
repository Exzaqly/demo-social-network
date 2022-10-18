import profileReducer, {deletePost} from "./profileReducer";



let state = {
    posts: [
        {id: 1, message: 'my first post', likesCount: '15'},
        {id: 2, message: 'helloooooo', likesCount: '12'},
    ],
}


it('posts should be decrement',  () => {

    let action = deletePost(1)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(1)
});