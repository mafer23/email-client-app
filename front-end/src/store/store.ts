import { configureStore } from "@reduxjs/toolkit";

//* Importing slices
import { authSlice } from "./slices/auth/AuthSlice";
import { uiSlice } from "./slices/ui/UiSlice";
import { emailSlice } from "./slices/email/EmailSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        ui: uiSlice.reducer,
        email: emailSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;