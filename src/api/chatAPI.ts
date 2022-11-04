
let subscribers = {
    'message-received' : [] as MessagesSubscriber[],
    'status-changed' : [] as StatusSubscriber[]
}
let ws: WebSocket | null
const closeHandler = () => {
    notifySubscribersAboutStatus('pending')
    setTimeout(createChannel, 3000)
}
function cleanUp() {
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHandler)
    ws?.removeEventListener('open', openHandler)
    ws?.removeEventListener('error', errorHandler)
}

const notifySubscribersAboutStatus = (status: Status) => {
    subscribers["status-changed"].forEach(s => s(status))
}

function createChannel() {
    cleanUp()
    ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    notifySubscribersAboutStatus('pending')
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', messageHandler)
    ws.addEventListener('open', openHandler)
    ws.addEventListener('error', errorHandler)
}


const messageHandler = (e: MessageEvent) => {
    let newMessages = JSON.parse(e.data)
   subscribers['message-received'].forEach(s => s(newMessages))
}
const openHandler = () => {
    notifySubscribersAboutStatus('ready')
}
const errorHandler = () => {
    notifySubscribersAboutStatus('error')
    console.error('refresh page')
}




export const chatAPI = {
    start() {
      createChannel()
    },
    stop() {
        subscribers['message-received'] = []
        subscribers['status-changed'] = []
        cleanUp()
        ws?.close()
    },
    subscribe(eventName: EventNames, callback: MessagesSubscriber | StatusSubscriber) {
        // @ts-ignore
        subscribers[eventName].push(callback)
    },
    unsubscribe(eventName: EventNames, callback: MessagesSubscriber | StatusSubscriber) {
        // @ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    }
}

type MessagesSubscriber = (messages: ChatMessage[]) => void
type StatusSubscriber = (status: Status) => void


export type ChatMessage = {
    userName: string
    photo: string
    userId: number
    message: string

}

type EventNames = 'message-received' | 'status-changed'
export type Status = 'pending' | 'ready' | 'error'