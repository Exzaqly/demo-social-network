import c from './Header.module.css'
import {NavLink} from "react-router-dom";
import {FC} from "react";

const Header: FC<Props> = (props) => {
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


type Props = {
    isAuth: boolean
    login: string | null
    userId: number | null
    logout : () => void
}