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
    setGetEmailsUser, 
    setResetEmailSlice, 
    setReseteSelectEmail, 
    setSelectEmail, 
    setSendNewMessage
} from "../store/slices/email/EmailSlice";

//* Importing types
import { Received, typeDataMessage } from '../types/types';

export const useEmailStores = () => {
  
    //* Attributes
    const { 
        emailsReceived, 
        emailSent, 
        emailsUsers,
        isLoading, 
        selectedEmail 
    } = useSelector( (state: RootState) => state.email );
    const dispatch = useDispatch();

    //* Methods

    //TODO: methods emails user
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

    //TODO: send email
    const onHandleSentEmailUser = async( formData: typeDataMessage ): Promise<void> => {

        dispatch( isCheckingProcess() );

        try {

            const newFormData = {
                ...formData, 
                sender: formData.sender.toString(),
                recipient: formData.recipient.toString()
            };
            
            const { data } = await emailClientApi.post( '/email/send', newFormData );

            const newMessage: Received = { 
                email: data.data.email[0], 
                user: data.data.recipient[0] 
            };

            dispatch( setSendNewMessage( newMessage ) );

        } catch (error) {
            if ( axios.isAxiosError(error) ) {

            }
        }

    }

    //TODO: get all emails users
    const onHandleAllEmailsUsers = async( ): Promise<void> => {

        dispatch( isCheckingProcess() );

        try {

            const { data } = await emailClientApi.get('/email/users');

            dispatch( setGetEmailsUser( data.data ) );
            
        } catch (error) {
            if (axios.isAxiosError(error)) {

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
        emailsUsers,

        //* Methods
        onHandleEmailsUser,
        onHandleSentEmailUser,
        onHandleSelectEmail,
        onHandleResetSelectEmail,
        onHandleResetEmailSlice,
        onHandleAllEmailsUsers
    }

}
