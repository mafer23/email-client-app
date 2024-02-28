//* Importing custom hook
import { useEmailStores } from "../../hooks/useEmailStores";
import { useUiStore } from "../../hooks/useUiStore"

export const useLayoutPanel = () => {

    //* Attributes
    const { previousPanelStatus, onHandleOpenSent, onHandleOpenInbux} = useUiStore();
    const { onHandleResetSelectEmail } = useEmailStores();

    //* Methods
    const onClickButtonBack = () => {

        onHandleResetSelectEmail(); //* Reset data in SelectEmail

        if ( previousPanelStatus![0] ) {
            onHandleOpenInbux();
        } else if( previousPanelStatus![1] ) {
            onHandleOpenSent();
        }

    }

    return {
        //* Attributes

        //* Methods
        onClickButtonBack

    }

}
