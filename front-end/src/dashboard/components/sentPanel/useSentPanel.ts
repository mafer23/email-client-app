//* Importing types
import { typeMessageCard } from "../../../types/types";

//* Importing custom hook
import { useEmailStores } from "../../../hooks/useEmailStores";

export const useSentPanel = () => {

    //* Attributes
    const { emailSent } = useEmailStores();
    
    //* Methods

    return {
        //* Attributes
        emailSent

        //* Methods

    }

}
