//* Importing images
import iconInbox from "../../../images/inbox.png";
import iconSent from "../../../images/sent.png";

//* Importing types
import { typeButtonsOptions } from "../../../types/types";

//* Importing custom hook
import { useUiStore } from "../../../hooks/useUiStore";
import { useEmailStores } from "../../../hooks/useEmailStores";

export const useNavBar = () => {
  
    //* Attributes
    const { 
        onHandleOpenInbux,
        onHandleOpenSent,
        onHandleOpenMessageModal 
    } = useUiStore();

    const { emailSent, emailsReceived } = useEmailStores();

    const dataButtonOptions: typeButtonsOptions[] = [
        { 
            id: 1, 
            name: 'Inbox', 
            icon: iconInbox, 
            amount: emailsReceived.length, 
            functionClick: onHandleOpenInbux 
        },
        { 
            id: 2, 
            name: 'Sent', 
            icon: iconSent, 
            amount: emailSent.length, 
            functionClick: onHandleOpenSent 
        }
    ];

    //* Methods

    return {
        //* Attributes
        dataButtonOptions,

        //* Methods
        onHandleOpenMessageModal,
    }

}
