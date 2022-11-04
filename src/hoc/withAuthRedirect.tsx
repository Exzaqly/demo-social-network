import React from "react";
import {Navigate} from "react-router-dom"
import {connect} from "react-redux";
import {AppStateType} from "../redux/store";

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
} as MapStateProps)

type MapStateProps = {
    isAuth: boolean
}

type MapDispatchProps = {
}

export function withAuthRedirect<WCP extends object> (Component: React.ComponentType<WCP>) {
    const RedirectComponent: React.FC<MapStateProps & MapDispatchProps> = (props) => {
        let {isAuth,...restProps} = props
        if (!props.isAuth) return <Navigate to="/login"/>

        return <Component {...restProps as WCP} />
    }

    return connect<MapStateProps, MapDispatchProps, WCP, AppStateType>(mapStateToProps, {})(RedirectComponent)
}