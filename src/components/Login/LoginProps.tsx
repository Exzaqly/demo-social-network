import {Error} from "../common/FormControl/FormControl";
import {useDispatch, useSelector} from "react-redux";
import {postLogin} from "../../redux/authReducer";
import {Navigate} from "react-router-dom"
import React, {FC} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {AppDispatch} from "../../redux/store";
import {getCaptchaUrl, getIsAuth} from "../../redux/authSelectors";

const LoginForm: FC<FormProps> = ({onSubmit, captchaUrl}) => {
    const {
        register,
        handleSubmit,
        formState: {errors},

    } = useForm<LoginProps>({
            mode: "onChange",
        }
    )

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div><input {...register('email', {
                required: 'email is required'
            })} type="email" placeholder={'email'}/>
            </div>
            {
                errors?.email && <Error error={errors.email.message}/>
            }
            <div>
                <input {...register('password', {
                    required: 'password is required!'
                })} type="password" placeholder={'password'}/>
            </div>
            {
                errors?.password && <Error error={errors.password.message}/>
            }
            <div>remember me <input{...register('rememberMe')} type="checkbox"/></div>
            {captchaUrl && <img src={captchaUrl} alt=""/>}
            {captchaUrl && <input {...register('captcha', {
                required: 'captcha is required!'
            })}  />
            }
            {
                errors?.captcha && <Error error={errors.captcha.message}/>
            }
            <div>
                <button>login</button>
            </div>
        </form>
    )
}


export const Login: FC = () => {
    const isAuth = useSelector(getIsAuth)
    const captchaUrl = useSelector(getCaptchaUrl)

    const dispatch: AppDispatch = useDispatch()


    const onSubmit: SubmitHandler<LoginProps> = (formData) => {
        dispatch(postLogin(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    if (isAuth) {
        return <Navigate to='/profile'/>
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
}



type LoginProps = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: string
}


type FormProps = {
    onSubmit: (data: LoginProps) => void
    captchaUrl: string | null
}