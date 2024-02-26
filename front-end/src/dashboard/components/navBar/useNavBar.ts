//* Importing images
import iconInbox from "../../../images/inbox.png";
import iconSent from "../../../images/sent.png";

//* Importing types
import { typeButtonsOptions } from "../../../types/types";

//* Importing custom hook
import { useUiStore } from "../../../hooks/useUiStore";

export const useNavBar = () => {
  
    //* Attributes
    const { 
        onHandleOpenInbux,
        onHandleOpenSent,
        onHandleOpenMessageModal 
    } = useUiStore();

    const dataButtonOptions: typeButtonsOptions[] = [
        { 
            id: 1, 
            name: 'Inbox', 
            icon: iconInbox, 
            amount: 2, 
            functionClick: onHandleOpenInbux 
        },
        { 
            id: 2, 
            name: 'Sent', 
            icon: iconSent, 
            amount: 2, 
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
