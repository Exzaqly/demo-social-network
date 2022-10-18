import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormControl/FormControl";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {postLogin, login} from "../../redux/authReducer";
import { Navigate } from "react-router-dom"
import c from "../common/FormControl/FormControl.module.css"

const LoginForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <div><Field component={Input} validate={[required]} name = {"email"} type="login" placeholder={'email'}/></div>
        <div><Field component={Input} validate={[required]} name = {"password"} type="password" placeholder={'password'}/></div>
        <div>remember me <Field component={"input"}  name = {"rememberMe"} type="checkbox"/> </div>
        <div><button>login</button></div>
        {props.error && <div className={c.authError}>Error: {props.error}</div>}
    </form>
)
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
   const onSubmit = (formData) => {
        props.postLogin(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Navigate to='/profile' />
    }

    return(
    <div>
        <h2>Login</h2>
        <ReduxLoginForm onSubmit = {onSubmit} />
    </div>
)}




export default connect(mapStateToProps, {postLogin})(Login)