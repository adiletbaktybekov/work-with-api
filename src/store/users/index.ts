import {Dispatch} from "@reduxjs/toolkit";
import {AxiosResponse} from "axios";
import API from "../../https/api";
import {fetchUsersSuccess} from "./actions";

export const fetchUsers = () => async (dispatch: Dispatch) => {
    try {
        const response: AxiosResponse = await API.get('/api/users')
        dispatch(fetchUsersSuccess(response.data))
    } catch (e) {
        console.log(e, "error")
    }
}