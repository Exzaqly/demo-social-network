import {DefaultResponse, instance} from "./api";

export const authAPI = {
    me: () => (
        instance.get<MeResponse>('auth/me')
            .then(response => response.data)
    ),
    login: (email: string, password: string, rememberMe = false, captcha?: string) => (
        instance.post<LoginResponse>('auth/login', {email, password, rememberMe, captcha})
            .then(response => response.data)
    ),
    logout: () => (
        instance.delete<DefaultResponse>('auth/login')
            .then(response => response.data)
    ),

}
type MeResponse = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: number
    messages: Array<string>
}
type LoginResponse = {
    resultCode: number
    messages: Array<string>
    data: { userId: number }
}