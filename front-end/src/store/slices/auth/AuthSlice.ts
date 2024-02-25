import { createSlice } from "@reduxjs/toolkit";

//* Importing types
import { typeAuthSlice } from "../../../types/types"; 

const initialState: typeAuthSlice = {
    status: 'no-authenticated', //authenticated, checking, no-authenticated
    user: {},
    errorMessage: undefined
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onChecking: (state) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined;
        },
        onLogin: (state, { payload }) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        },
        onLogout: (state, { payload }) => {
            state.status = 'no-authenticated';
            state.user = {};
            state.errorMessage = payload;
        }
    }
});

export const { onChecking, onLogin, onLogout } = authSlice.actions;