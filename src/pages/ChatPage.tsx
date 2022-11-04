import React, {FC, useEffect, useRef, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppStateType} from "../redux/store";
import {sendMessage, startMessagesListening, stopMessagesListening} from "../redux/chatReducer";


const ChatPage: FC = () => {
    return (
        <div>
            <Chat/>
        </div>
    )
}

const Chat: FC = () => {
    const dispatch: AppDispatch = useDispatch()
    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])
    return (
        <div>
            <Messages/>
            <AddMessageForm/>
        </div>)
}

const AddMessageForm: FC = () => {
    const {register, reset, handleSubmit} = useForm<ChatFormMessage>()
    const dispatch: AppDispatch = useDispatch()
    const status = useSelector((state: AppStateType) => state.chat.status)


    const sendMessageHandler: SubmitHandler<ChatFormMessage> = (data) => {
        dispatch(sendMessage(data.chatMessage))
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(sendMessageHandler)}>
                <textarea {...register('chatMessage')} placeholder={'enter your message'}></textarea>
                <button disabled={status !== 'ready'}>send</button>
            </form>
        </div>)
}

const Messages: FC = () => {
    const messages = useSelector((state: AppStateType) => state.chat.messages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const [isAutoScroll, setIsAutoScroll] = useState(false)

    useEffect(() => {
        if (isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages])

    function scrollHandler(e:React.UIEvent<HTMLDivElement, UIEvent>) {
        const el = e.currentTarget
        if(Math.abs((el.scrollHeight - el.scrollTop) - el.clientHeight) < 30){
            !isAutoScroll && setIsAutoScroll(true)
        }else {
           isAutoScroll && setIsAutoScroll(false)
        }
    }

    return (
        <div style={{height: "600px", overflowY: "auto"}} onScroll={scrollHandler}>
            {messages.map((m, index) => (
                <Message key={index} message={m}/>
            ))}
            <div ref={messagesAnchorRef}></div>
        </div>)
}

const Message: FC<{ message: ChatMessageType }> = ({message}) => {
    return (
        <div>
            <div>
                <img style={{width: '40px', marginRight: "10px"}} src={message.photo} alt=""/>
                <b>{message.userName}</b>
            </div>
            <div>{message.message}
                <hr/>
            </div>
        </div>
    )
}

export default ChatPage

type ChatMessageType = {
    userName: string
    photo: string
    userId: number
    message: string
}

type ChatFormMessage = {
    chatMessage: string
}