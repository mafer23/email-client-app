//* Importing custom hook
import { useEmailStores } from "../../../hooks/useEmailStores";

//* Importing types


export const useInboxPanel = () => {

    //* Attributes
    const { emailsReceived } = useEmailStores();

    //* Methods

    return {
        //* Attributes
        emailsReceived

        //* Methods

    }

}
