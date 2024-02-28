//* Importing custom hook
import { useEmailStores } from "../../../hooks/useEmailStores";

//* Importing types
import { typeMessageCard } from "../../../types/types";

export const useInboxPanel = () => {

    //* Attributes
    const messageTest: typeMessageCard[] = [
        { 
            recipient: 'Carlos Mosquera',
            subject: 'Instalación Python', 
            dateMessage: '18/02/2024 3:12 p. m.' 
        },
        { 
            recipient: 'Carlos Mosquera',
            subject: 'Instalación Python', 
            dateMessage: '18/02/2024 3:12 p. m.' 
        },
        { 
            recipient: 'Carlos Mosquera',
            subject: 'Instalación Python', 
            dateMessage: '18/02/2024 3:12 p. m.' 
        },
        { 
            recipient: 'Carlos Mosquera',
            subject: 'Instalación Python', 
            dateMessage: '18/02/2024 3:12 p. m.' 
        }
    ];

    const { emailsReceived } = useEmailStores();

    //* Methods

    return {
        //* Attributes
        messageTest,
        emailsReceived

        //* Methods

    }

}
