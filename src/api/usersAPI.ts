import {UserType} from "../types/types";
import {DefaultResponse, instance} from "./api";
import {Filter} from "../redux/usersReducer";

type GetUsersResponse = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}
export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number, filter: Filter) => (
        instance.get<GetUsersResponse>(`users?page=${currentPage}&count=${pageSize}&term=${filter.term}`+ (filter.friend === null ? '' : `&friend=${filter.friend}`))
            .then(response => response.data)
    ),

    getUnfollow: (userId: number) => (
        instance.delete<DefaultResponse>(`follow/${userId}`)
            .then(response => response.data)
    ),
    getFollow: (userId: number) => (
        instance.post<DefaultResponse>(`follow/${userId}`)
            .then(response => response.data)
    ),
}