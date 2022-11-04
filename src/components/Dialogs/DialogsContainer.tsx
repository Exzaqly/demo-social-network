import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/store";
import { actions } from "../../redux/dialogsReducer";




const mapStateToProps = (state: AppStateType) => ({
    messages: state.dialogsPage.messages,
    dialogs: state.dialogsPage.dialogs,
})




export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {addMessage: actions.addMessage}),
)(Dialogs)
