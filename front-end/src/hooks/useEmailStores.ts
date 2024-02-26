//* Importing Redux

import { useSelector } from "react-redux"
import { RootState } from "../store/store"

export const useEmailStores = () => {
  
    //* Attributes
    const { 
        emailsReceived, 
        emailSent, 
        isLoading, 
        selectedEmail 
    } = useSelector( (state: RootState) => state.email );

    //* Methods

    return {
        //* Attributes
        emailsReceived,
        emailSent,
        isLoading,
        selectedEmail,

        //* Methods
    }

}
