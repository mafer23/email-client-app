//* Importing images
import iconInbox from "../../../images/inbox.png";
import iconSent from "../../../images/sent.png";

//* Importing types
import { typeButtonsOptions } from "../../../types/types";

export const useNavBar = () => {
  
    //* Attributes
    const dataButtonOptions: typeButtonsOptions[] = [
        { id: 1, name: 'Inbox', icon: iconInbox, amount: 2 },
        { id: 2, name: 'Sent', icon: iconSent, amount: 2 }
    ];

    //* Methods

    return {
        //* Attributes
        dataButtonOptions,

        //* Methods

    }

}
