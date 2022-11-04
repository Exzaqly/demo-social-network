import axios from "axios";

export const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '5be748e0-ac12-437a-8941-61588d7aa469 '
    }
})

export type DefaultResponse = {
    resultCode: number
    messages: Array<string>
    data: {}
}

export enum ResultCodes {
    Success = 0,
    Error = 1,
}

export enum ResultCodeCaptcha{
    CaptchaIsRequired = 10
}



