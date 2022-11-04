import {connect} from "react-redux";
import NavBar from "./NavBar";
import {AppStateType} from "../../redux/store";
import {FriendsType} from "../../types/types";

const mapStateToProps = (state: AppStateType) => ({
   friends: state.sidebar.friends,

} as MapStateProps)






export default connect<MapStateProps, MapDispatchProps, {}, AppStateType>(mapStateToProps,{})(NavBar)


type MapStateProps = {
   friends: Array<FriendsType>
}

type MapDispatchProps = {

}