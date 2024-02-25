//* Importing 
import { useUiStore } from "../../hooks/useUiStore"

export const useLayoutPanel = () => {

    //* Attributes
    const { previousPanelStatus, onHandleOpenSent, onHandleOpenInbux} = useUiStore();

    //* Methods
    const onClickButtonBack = () => {

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
