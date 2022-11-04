import {instance} from "./api";

export const securityAPI = {
    getCaptchaUrl: () => (
        instance.get<{ url: string }>('security/get-captcha-url')
            .then(response => response.data)
    )
}