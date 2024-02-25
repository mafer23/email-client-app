import { useEffect } from "react";

//* Importing custom hooks
import { useUiStore } from "../../../hooks/useUiStore"

export const useMessageCard = ( namePanel: string ) => {

    //* Attributes
    const { onHandleOpenMessage, onHandleSetPreviousPanelStatus } = useUiStore();

    //* Methods
    const onClickCard = (): void => {
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
