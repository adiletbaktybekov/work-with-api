import {configureStore} from "@reduxjs/toolkit";
import users from './users/reducer'


export const store = configureStore({
    reducer: {
        users,
    }
})