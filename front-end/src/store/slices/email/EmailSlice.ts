import { PayloadAction, createSlice } from "@reduxjs/toolkit";

//* Importing types
import { typeEmailSlice } from "../../../types/types";

const initialState: typeEmailSlice = {
    emailsReceived: [], //* Correos recibidos
    emailSent: [], //* Correos enviados
    emailsUsers: [], //* Correos de todos los usuarios
    selectedEmail: undefined,
    isLoading: false //* Revisando proceso
}

export const emailSlice = createSlice({
    name: 'email',
    initialState,
    reducers: {
        isCreatingNewMessage: (state) => { 
            state.isLoading = true;
        },
        setEmailsUser: (state, { payload }) =>{ //* Recibiendo todos los emails
            //state.emails = payload;
            state.isLoading = true;
        },
        setSelectEmail: (state, { payload }) => { //* Seleccionando un email
            state.selectedEmail = payload;
        },
        setSendNewMessage: (state, { payload }: PayloadAction<any>) => { //* Guardando nuevo email
            //state.emailSent.push(payload);
            state.isLoading = false;
        }
    }
});

export const { 
    isCreatingNewMessage,
    setEmailsUser,
    setSelectEmail,
    setSendNewMessage
 } = emailSlice.actions;