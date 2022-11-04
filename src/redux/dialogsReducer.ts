import {DialogType, MessageType} from "../types/types";
import {InferActionsType} from "./store";




let initialState = {
    dialogs: [
        {id: 1, name: 'Valera'},
        {id: 2, name: 'Kirill'},
        {id: 3, name: 'Milana'},
        {id: 4, name: 'Vitalina'},
        {id: 5, name: 'Nastya'},
        {id: 6, name: 'Artem'},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'how are you?'},
        {id: 3, message: 'fine'},
        {id: 4, message: 'cool'},
    ] as Array<MessageType>,

}



const dialogsReducer = (state = initialState, action: Actions) : InitialStateType => {
    switch (action.type) {
        case "dialogs/ADD-MESSAGE": {
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: action.messageText,}],

            }
        }
        default:
            return state
    }

}


export const actions = {
    addMessage : (messageText: string)  => ({type: "dialogs/ADD-MESSAGE", messageText})
}

export default dialogsReducer


export type InitialStateType = typeof initialState
type Actions = InferActionsType<typeof actions>

