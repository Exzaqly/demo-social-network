const ADD_MESSAGE = "ADD-MESSAGE"

let initialState = {
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

}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: action.messageText,}],

            }
        }
        default:
            return state
    }

}

export const addMessage = (messageText) => ({type: ADD_MESSAGE, messageText})


export default dialogsReducer