//* Importing custom hook
import { useEmailStores } from "../../../hooks/useEmailStores"

export const useMessagePanel = () => {
  
    //* Attributes
    const { selectedEmail } = useEmailStores();

    //* Methods

    return {
        //* Attributes
        selectedEmail

        //* Methods
    }

}
