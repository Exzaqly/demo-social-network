import c from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import Friend from "./Friends/Friend";

const SelectedLink = () => {
    return (
        select => select.isActive ? c.active : c.item
    );
}


const NavBar = (props) => {
    let friendElements = props.sidebar.friends.map(friend => (<Friend key = {friend.id} name ={friend.name} avatar ={friend.avatar} />))


    return (
        <nav className={c.nav}>
            <div>
                <NavLink to='/profile' className={SelectedLink()}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/news' className={SelectedLink()}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' className={SelectedLink()}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' className={SelectedLink()}>Settings</NavLink>
            </div>
            <div>
                <NavLink to='/users' className={SelectedLink()}>Users</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className={SelectedLink()}>Dialogs</NavLink>
            </div>
            <div>
                <NavLink to='/friends' className={SelectedLink()}>Friends</NavLink>
                <div className={c.friends}>
                    {friendElements}
                </div>
            </div>
        </nav>
    )
}

export default NavBar