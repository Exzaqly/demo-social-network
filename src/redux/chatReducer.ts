import {ResultCodeCaptcha, ResultCodes} from "../api/api";
import {AppDispatch, BaseThunk, InferActionsType} from "./store";
import {authAPI} from "../api/authAPI";
import {securityAPI} from "../api/securityAPI";
import {chatAPI, ChatMessage, Status} from "../api/chatAPI";
import messages from "../components/Dialogs/Messages/Messages";



let initialState = {
    messages: [] as ChatMessage[],
    status: 'pending' as Status,
}

const chatReducer = (state = initialState, action: Actions): initialStateType => {

    switch (action.type) {
        case  'chat/MESSAGES_RECEIVED' : {
            return {
                ...state,
                messages:[...state.messages, ...action.payload]
            }
        }
        case 'chat/STATUS_CHANGED': {
            return {
                ...state,
                status: action.payload.status
            }
        }
        default:
            return state
    }
}


const actions = {
    messagesReceived: (messages: ChatMessage[]) => ({
        type: 'chat/MESSAGES_RECEIVED',
        payload: messages
    } as const),
    statusChanged: (status: Status) => ({
        type: 'chat/STATUS_CHANGED',
        payload: {status}
    } as const),



}

let _newMessageHandler: ((messages: ChatMessage[]) => void) | null = null

const newMessageHandlerCreator = (dispatch: AppDispatch) => {
    if(_newMessageHandler === null) {
        _newMessageHandler = (messages: ChatMessage[]) => {
            dispatch(actions.messagesReceived(messages))
        }
    }
    return _newMessageHandler
}

let _StatusHandler: ((status: Status) => void) | null = null

const StatusHandlerCreator = (dispatch: AppDispatch) => {
    if(_StatusHandler === null) {
        _StatusHandler = (status: Status) => {
            dispatch(actions.statusChanged(status))
        }
    }
    return _StatusHandler
}


export const startMessagesListening = (): Thunk => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe('message-received',newMessageHandlerCreator(dispatch))
    chatAPI.subscribe('status-changed',StatusHandlerCreator(dispatch))
}
export const stopMessagesListening = (): Thunk => async (dispatch) => {
    chatAPI.unsubscribe('message-received',newMessageHandlerCreator(dispatch))
    chatAPI.unsubscribe('status-changed',StatusHandlerCreator(dispatch))
    chatAPI.stop()
}
export const sendMessage = (message: string): Thunk => async (dispatch) => {
    chatAPI.sendMessage(message)
}


export default chatReducer


type initialStateType = typeof initialState
type Actions = InferActionsType<typeof actions>
type Thunk = BaseThunk<Actions>
