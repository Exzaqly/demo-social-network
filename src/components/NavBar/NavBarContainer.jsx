import {connect} from "react-redux";
import NavBar from "./NavBar";

const mapStateToProps = (state) => ({
   sidebar: state.sidebar,

})

const mapDispatchToProps = (dispatch) => ({

})




export default connect(mapStateToProps,mapDispatchToProps)(NavBar)