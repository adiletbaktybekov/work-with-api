import {createReducer} from "@reduxjs/toolkit";
import {IUsersState} from "../interfaces/users-intefaces";
import {fetchUsersSuccess} from "./actions";

const initialState: IUsersState = {
    users: [],
}

export default createReducer(initialState, (builder) => {
    builder.addCase(fetchUsersSuccess, (state, action) => {
        return {...state, users: action.payload}
    })
})