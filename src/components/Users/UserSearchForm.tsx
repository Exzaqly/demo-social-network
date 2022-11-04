import React, {useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {Filter, requestUsers} from "../../redux/usersReducer";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentPage, getPageSize, getUsersFilter} from "../../redux/usersSelectors";
import {AppDispatch} from "../../redux/store";
import {createSearchParams, useLocation, useNavigate} from "react-router-dom";



export const UserSearchForm: React.FC = () => {

    const filter = useSelector(getUsersFilter)
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const dispatch: AppDispatch = useDispatch()
    const {
        register,
        handleSubmit,
        reset
    } = useForm<Filter>()
    const useNavigateSearch = () => {
        const navigate = useNavigate()
        return (pathname: string, params: Params) => {
            navigate(`${pathname}?${createSearchParams(params)}`)
        }
    }
    const navigateSearch = useNavigateSearch()
    const location = useLocation()


    useEffect(() => {
        const url = new URLSearchParams(location.search)

        let actualPage = currentPage
        let actualFilter = filter

        const urlPage = url.get('page')
        const urlTerm = url.get('term')
        const urlFriend = url.get('friend')

        if (!!urlPage) {
            actualPage = Number(urlPage)
        }
        if (!!urlTerm) {
            actualFilter = {...actualFilter, term: urlTerm}
        }
        if(!!urlFriend) {
            actualFilter = {...actualFilter, friend: urlFriend  as "null" | "true" | "false"}
        }


        dispatch(requestUsers(actualPage, pageSize, actualFilter))
        reset()
    }, [location.search])

    useEffect(() => {
        navigateSearch('/users', {
            page: `${currentPage}`,
            term: `${filter.term}`,
            friend: `${filter.friend}`
        })
    }, [filter, currentPage, pageSize])

    const onFilterChanged: SubmitHandler<Filter> = (filter) => {
        dispatch(requestUsers(1, pageSize, filter))
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onFilterChanged)}>
                <input {...register('term', {
                    value: filter.term
                })
                       } type="text"/>
                <select {...register("friend", {
                    value: filter.friend
                })}>
                    <option value="null">All</option>
                    <option value="true">Followed</option>
                    <option value="false">Unfollowed</option>
                </select>
                <button type='submit'>find</button>
            </form>
        </div>
    )
}



type Params = {
    page: string,
    term: string,
    friend: string
}

