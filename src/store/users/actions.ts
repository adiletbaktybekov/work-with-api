import {createAction} from "@reduxjs/toolkit";
import {IUsers} from "../interfaces/users-intefaces";

export const fetchUsersSuccess = createAction<IUsers[]>(
    'users/fetchUsersSuccess'
)