import { useEffect } from "react";

//* Importing custom hooks
import { useUiStore } from "../../../hooks/useUiStore"
import { useEmailStores } from "../../../hooks/useEmailStores";

//* Importing types
import { Received } from "../../../types/types";

export const useMessageCard = ( namePanel: string, data: Received ) => {

    //* Attributes
    const { onHandleOpenMessage, onHandleSetPreviousPanelStatus } = useUiStore();
    const { onHandleSelectEmail } = useEmailStores();

    //* Methods
    const onClickCard = (): void => {
        onHandleSelectEmail( data );
        onHandleOpenMessage();
    }

    //* UseEffect
    useEffect(() => {

        if (namePanel === 'inbox') {
            onHandleSetPreviousPanelStatus([true, false, false]);
        } else {
            onHandleSetPreviousPanelStatus([false, true, false]);
        }

    }, []);

    return {
        //* Attributes

        //* Methods
        onClickCard
    }

}
