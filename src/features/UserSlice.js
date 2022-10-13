import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'User',
    initialState: {
        user: {
            id: '',
            username: '',
        },
        authenticated: false,
    },
    reducers: {
        changeUsername: (state, action) => {
            state.user.username = action.payload
        },
        changePassword: (state, action) => {
            state.user.password = action.payload
        },
        changeUser: (state, action) => {
            state.user = action.payload
        },
        authenticate: (state) => {
            state.authenticated = true
        },
        deauthenticate: (state) => {
            state.authenticated = false
        },
        resetUser: (state) => {
            state.user = {}
            state.authenticated = false
        }
    }
})

export const {changeUsername, changePassword, changeUser, authenticate, deauthenticate, resetUser } = userSlice.actions
export default userSlice.reducer