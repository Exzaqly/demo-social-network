import {FriendsType} from "../types/types";


let initialState:InitialStateType = {
    friends: [
        {id: 1, name:'George', avatar: 'https://abrakadabra.fun/uploads/posts/2022-02/1644764716_1-abrakadabra-fun-p-avatarki-iz-pinteresta-estetichnie-1.png'},
        {id: 2, name:'Mia', avatar: 'https://trikky.ru/wp-content/blogs.dir/1/files/2020/12/27/izobrazhenie_viber_2020-12-27_17-34-45.jpg'},
        {id: 3, name:'Lucy', avatar: 'https://vraki.net/sites/default/files/inline/images/2_3.png'},
    ]
}

type InitialStateType = {
    friends : Array<FriendsType>
}

const sideBarReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}

export default sideBarReducer