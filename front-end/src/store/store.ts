import { configureStore } from "@reduxjs/toolkit";

//* Importing slices
import { authSlice } from "./slices/auth/AuthSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;