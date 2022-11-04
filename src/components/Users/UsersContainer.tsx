import {useSelector} from "react-redux";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import {getIsFetching} from "../../redux/usersSelectors";
import {Users} from "./Users";


const UsersContainer: React.FC = () => {
    const isFetching = useSelector(getIsFetching)

    return <>
        {isFetching ? <Preloader/> : null}
        <Users/>
    </>
}


export default UsersContainer




