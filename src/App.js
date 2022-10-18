import React, {Suspense, lazy} from "react"
import './App.css';
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import withRouter from "./hoc/withRouter";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp} from "./redux/appReducer";

const DialogsContainer =  lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"))
const UsersContainer = lazy(() => import("./components/Users/UsersContainer"))

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader />
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBarContainer/>
                <div className="app-wrapper__content">
                    <Suspense fallback={<Preloader />}>
                    <Routes>
                        <Route path='/dialogs' element={<DialogsContainer/>}/>
                        <Route path='/profile/:userId'
                               element={<ProfileContainer/>}
                        />
                        <Route path='/profile/*'
                               element={<ProfileContainer/>}
                        />
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                    </Suspense>
                </div>
            </div>


        )}


}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}),)
    (App)

