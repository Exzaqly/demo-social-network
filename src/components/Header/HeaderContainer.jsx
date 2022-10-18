import c from './Header.module.css'
import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth, logout} from "../../redux/authReducer";


class HeaderContainer extends React.Component {


    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId
})

export default connect(mapStateToProps, { logout})(HeaderContainer)