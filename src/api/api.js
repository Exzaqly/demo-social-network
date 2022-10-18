import axios from "axios";

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '5be748e0-ac12-437a-8941-61588d7aa469 '
    }
})


export const usersAPI = {
    getUsers : (currentPage,pageSize) => (
        instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    ),

    getUnfollow : (userId) => (
        instance.delete(`follow/${userId}`)
            .then(response => response.data)
    ),
    getFollow : (userId) => (
        instance.post(`follow/${userId}`)
            .then(response => response.data)
    ),
}

export  const profileAPI = {
    getProfile : (userId) => (
        instance.get(`profile/${userId}`)
            .then(response => response.data)
    ),
    getStatus : (userId) => (
        instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    ),
    updateStatus : (status) => (
        instance.put('profile/status', {status})
            .then(response => response.data)
    )
}


export const authAPI = {
    me : () => (
        instance.get('auth/me')
            .then(response => response.data)
    ),
    login : (email, password, rememberMe = false) => (
        instance.post('auth/login', {email, password, rememberMe,})
            .then(response => response.data)
    ),
    logout : () => (
        instance.delete('auth/login')
            .then(response => response.data)
    )
}