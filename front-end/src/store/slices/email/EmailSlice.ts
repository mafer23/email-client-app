import { PayloadAction, createSlice } from "@reduxjs/toolkit";

//* Importing types
import { 
    DataMessagesUser, 
    Received, 
    typeDataMessage, 
    typeEmailSlice 
} from "../../../types/types";

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
        isCheckingProcess: (state) => { 
            state.isLoading = true;
        },
        setEmailsUser: (state, action: PayloadAction<DataMessagesUser>) => { //* Recibiendo todos los emails
            state.emailSent = action.payload.sent;
            state.emailsReceived = action.payload.received;
            state.isLoading = false;
        },
        setSelectEmail: (state, action: PayloadAction<Received>) => { //* Seleccionando un email
            state.selectedEmail = action.payload;
        },
        setSendNewMessage: (state, action: PayloadAction<typeDataMessage>) => { //* Guardando nuevo email
            //state.emailSent = [ ...state.emailSent, action.payload ];
            state.isLoading = false;
        },
        setReseteSelectEmail: (state) => {
            state.selectedEmail = undefined;
        },
        setResetEmailSlice: (state) => {
            state.emailsReceived = [], 
            state.emailSent = [], 
            state.emailsUsers = [], 
            state.selectedEmail = undefined,
            state.isLoading = false 
        }
    }
});

export const { 
    isCheckingProcess,
    setEmailsUser,
    setSelectEmail,
    setSendNewMessage,
    setReseteSelectEmail,
    setResetEmailSlice
 } = emailSlice.actions;