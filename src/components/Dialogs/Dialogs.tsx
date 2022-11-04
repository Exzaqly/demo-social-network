import c from './Dialogs.module.css'
import Message from "./Messages/Messages";
import DialogItem from "./DialogItem/DialogItem";
import {DialogType, MessageType} from "../../types/types";
import React, {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";







let AddMessageForm: FC<FormProps> =  (props) => {

    const {handleSubmit, reset, register} = useForm<Message>()
    let addNewMessage: SubmitHandler<Message> = (values ) => {
        props.addMessage(values.newMessageBody)
        reset()
    }


   return <form onSubmit={handleSubmit(addNewMessage)}>
        <div>
            <textarea {...register('newMessageBody', {
                maxLength: 200
            })} placeholder={'enter your message'}/>
        </div>
        <div>
            <button>send</button>
        </div>
    </form>
}





const Dialogs: React.FC<Props> = (props) => {
    let dialogsElements = props.dialogs.map(dialog => (<DialogItem key = {dialog.id} name ={dialog.name} id = {dialog.id} />))
    let messageElements = props.messages.map(message => ( <Message key = {message.id} message ={message.message}  />))



    return (
        <div>
            <div className={c.dialogs}>
                <div className={c.dialog_items}>
                    {dialogsElements}
                </div>

                <div className={c.messages}>
                    {messageElements}
                    <AddMessageForm addMessage = {props.addMessage} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs


type Props = {
    messages: Array<MessageType>,
    dialogs: Array<DialogType>,
    addMessage: (messageText: string) => void
}

type FormProps = {
    addMessage: (messageText: string) => void
}

type Message = {
    newMessageBody: string
}
