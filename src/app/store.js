import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/UserSlice'
import messagesReducer from '../features/MessagesSlice'

export const store =  configureStore({
    reducer: {
        user: userReducer,
        messages: messagesReducer
    },
})