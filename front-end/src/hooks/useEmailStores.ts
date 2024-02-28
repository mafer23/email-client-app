//* Importing Redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";

//* Importing AXIOS
import emailClientApi from "../api/emailClientApi";
import axios from "axios";

//* Importing actions slices
import { 
    isCheckingProcess, 
    setEmailsUser, 
    setResetEmailSlice, 
    setReseteSelectEmail, 
    setSelectEmail, 
    setSendNewMessage
} from "../store/slices/email/EmailSlice";

//* Importing types
import { Received, typeDataMessage } from "../types/types";

export const useEmailStores = () => {
  
    //* Attributes
    const { 
        emailsReceived, 
        emailSent, 
        isLoading, 
        selectedEmail 
    } = useSelector( (state: RootState) => state.email );
    const dispatch = useDispatch();

    //* Methods
    const onHandleEmailsUser = async( idUser: number ): Promise<void> => {

        dispatch( isCheckingProcess() );

        try {
            
            const { data } = await emailClientApi.get( `/email/user?user_id=${ idUser }` );
            dispatch( setEmailsUser(data.data) );

        } catch (error) {
            if ( axios.isAxiosError(error) ) {

            }
        }

    }

    const onHandleSentEmailUser = async( formData: typeDataMessage ): Promise<void> => {

        dispatch( isCheckingProcess() );

        try {
            
            const { data } = await emailClientApi.post( '/email/send', formData );

            dispatch( setSendNewMessage( formData ) );

        } catch (error) {
            if ( axios.isAxiosError(error) ) {

            }
        }

    }

    const onHandleSelectEmail = ( data: Received ): void => {
        dispatch( setSelectEmail( data ) );
    }

    const onHandleResetSelectEmail = (): void => {
        dispatch( setReseteSelectEmail() );
    }

    const onHandleResetEmailSlice = (): void => {
        dispatch( setResetEmailSlice() );
    }

    return {
        //* Attributes
        emailsReceived,
        emailSent,
        isLoading,
        selectedEmail,

        //* Methods
        onHandleEmailsUser,
        onHandleSentEmailUser,
        onHandleSelectEmail,
        onHandleResetSelectEmail,
        onHandleResetEmailSlice
    }

}
