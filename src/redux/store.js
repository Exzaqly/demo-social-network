mport profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sideBarReducer";


let store = {
    _subscriber() {
        console.log('no subscribers')
    },
    _state : {
        dialogsPage: {
            messageText: '',
            dialogs: [
                {id: '1', name: 'Valera'},
                {id: '2', name: 'Kirill'},
                {id: '3', name: 'Milana'},
                {id: '4', name: 'Vitalina'},
                {id: '5', name: 'Nastya'},
                {id: '6', name: 'Artem'},
            ],
            messages: [
                {id: '1', message: 'hi'},
                {id: '2', message: 'how are you?'},
                {id: '3', message: 'fine'},
                {id: '4', message: 'cool'},
            ],

        },
        profilePage: {
            posts: [
                {id: 1, message: 'my first post', likesCount: '15'},
                {id: 2, message: 'helloooooo', likesCount: '12'},
            ],
            newPostText: '',
        },
        sidebar: {
            friends: [
                {id: '1', name:'George', avatar: 'https://abrakadabra.fun/uploads/posts/2022-02/1644764716_1-abrakadabra-fun-p-avatarki-iz-pinteresta-estetichnie-1.png'},
                {id: '1', name:'Mia', avatar: 'https://trikky.ru/wp-content/blogs.dir/1/files/2020/12/27/izobrazhenie_viber_2020-12-27_17-34-45.jpg'},
                {id: '1', name:'Lucy', avatar: 'https://vraki.net/sites/default/files/inline/images/2_3.png'},
            ]
        }
    },

    getState() {
        return this._state
    },
    subscribe (observer) {
        this._subscriber = observer
    },

    dispatch(action) {
       this._state.profilePage = profileReducer(this._state.profilePage, action)
       this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
       this._state.sidebar = sidebarReducer(this._state.sidebar, action)

       this._subscriber(this._state)

    },

}


export default store