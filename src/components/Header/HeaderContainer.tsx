import React, {FC} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/authReducer";
import {AppStateType} from "../../redux/store";



const HeaderContainer:React.FC<MapStateProps & MapDispatchProps> = (props) => {
    return <Header {...props}/>
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId
})

export default connect<MapStateProps, MapDispatchProps, {}, AppStateType>(mapStateToProps, { logout})(HeaderContainer)


type MapStateProps = {
    isAuth: boolean
    login: string | null
    userId: number | null
}

type MapDispatchProps = {
    logout : () => void
}