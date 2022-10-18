import c from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={c.header}>
            <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt=""/>
            <div className={c.login}>{props.isAuth ? <NavLink to={`/profile/${props.userId}`}>
                    <div>
                        {props.login}
                    </div>
                    <button onClick={props.logout}>Log out</button>
            </NavLink> :
                <NavLink to={'/login'}>Login</NavLink>
            }
            </div>
        </header>

    )
}

export default Header