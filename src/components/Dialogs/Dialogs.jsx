import c from './Dialogs.module.css'
import Message from "./Messages/Messages";
import DialogItem from "./DialogItem/DialogItem";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControl/FormControl";
import {maxLengthCreator, required} from "../../utils/validators";


const maxLength20 = maxLengthCreator(20)




let AddMessageForm =  (props) => (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newMessageBody'} placeholder={'enter your message'}  validate={[required, maxLength20]} component={Textarea}/>
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
)

AddMessageForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)


const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(dialog => (<DialogItem key = {dialog.id} name ={dialog.name} id = {dialog.id} />))
    let messageElements = props.dialogsPage.messages.map(message => ( <Message key = {message.id} message ={message.message}  />))


    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
    }
    return (
        <div>
            <div className={c.dialogs}>
                <div className={c.dialog_items}>
                    {dialogsElements}
                </div>

                <div className={c.messages}>
                    {messageElements}
                    <AddMessageForm onSubmit = {addNewMessage} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs