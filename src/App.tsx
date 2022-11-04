import React, {Suspense, lazy} from "react"
import './App.css';
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import withRouter from "./hoc/withRouter";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp} from "./redux/appReducer";
import {AppStateType} from "./redux/store";
import Profile from "./components/Profile/Profile";
import {Login} from "./components/Login/LoginProps";
import ChatPage from "./pages/ChatPage";

const DialogsContainer =  lazy(() => import("./components/Dialogs/DialogsContainer"))
const UsersContainer = lazy(() => import("./components/Users/UsersContainer"))

class App extends React.Component<MapStateProps & MapDispatchProps> {
    catchAllUnhandledErrors = (
        promiseRejectionEvent: PromiseRejectionEvent) => {
       alert('Some error')
        console.log(promiseRejectionEvent)
    }
    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection',
            this.catchAllUnhandledErrors)
    }
    componentWillUnmount() {
        window.removeEventListener('unhandledrejection',
            this.catchAllUnhandledErrors)
    }
    render() {
        if (!this.props.initialized) {
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
                               element={<Profile/>}
                        />
                        <Route path='/profile/*'
                               element={<Profile/>}
                        />
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/chat' element={<ChatPage/>}/>
                    </Routes>
                </Suspense>
            </div>
        </div>)}}





const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}),)
(App)



type MapStateProps = ReturnType<typeof mapStateToProps>
type MapDispatchProps = {
    initializeApp: () => void
}