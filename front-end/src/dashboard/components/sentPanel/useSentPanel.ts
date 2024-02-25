//* Importing types
import { typeMessageCard } from "../../../types/types";

export const useSentPanel = () => {

    //* Attributes
    const messageTest: typeMessageCard[] = [
        { 
            recipient: 'Carlos Mosquera',
            subject: 'Mensaje de prueba', 
            dateMessage: '25/02/2024 3:12 p. m.' 
        },
        { 
            recipient: 'Karen Sun',
            subject: 'Has sido invitado al tech fellowship program', 
            dateMessage: '20/02/2024 3:12 p. m.' 
        },
        
    ];
    
    //* Methods

    return {
        //* Attributes
        messageTest,

        //* Methods

    }

}
