import { createSlice } from "@reduxjs/toolkit";

export const messagesSlice = createSlice({
    name: 'messages',
    initialState: {
        messages: [],
        hasNewMessages: false,
    },
    reducers: {
        changeMessages: (state, action) => {
            const initPayload = action.payload;
            const newState = initPayload.concat(state.messages)

            state.messages = newState
            state.hasNewMessages = true
        },

        resetHasNewMessages: (state) => {
            state.hasNewMessages = false
        },

        newMessageSent: (state) => {
            state.hasNewMessages = true
        }
    }
})

export const { changeMessages, resetHasNewMessages, newMessageSent } = messagesSlice.actions
export default messagesSlice.reducer