import { useEffect } from "react";

//* Importing custom hook
import { useUiStore } from "../../hooks/useUiStore"
import { useEmailStores } from "../../hooks/useEmailStores";
import { useAuthStore } from "../../hooks/useAuthStore";

export const useDashBoardPage = () => {

    //* Attributes
    const { statePanels, messageModal } = useUiStore();
    const { onHandleEmailsUser } = useEmailStores();
    const { user } = useAuthStore();
    
    //* Methods

    //* useEffect
    useEffect(() => {

        onHandleEmailsUser( user.userId );

    }, []);

    return {
        //* Attributes
        statePanels,
        messageModal
    
        //* Methods
    }

}
