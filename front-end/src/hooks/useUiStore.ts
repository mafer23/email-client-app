//* Importing Redux
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"

//* Importing actions
import { 
    onOpenInboxPanel, 
    onOpenMessagePanel, 
    onOpenSentPanel, 
    onSetPreviousPanelStatus
} from "../store/slices/ui/UiSlice";

export const useUiStore = () => {

    //* Attributes
    const { statePanels, previousPanelStatus } = useSelector((state: RootState) => state.ui);
    const dispatch = useDispatch();

    //* Methods
    const onHandleOpenInbux = (): void => {
        dispatch( onOpenInboxPanel() );
    }

    const onHandleOpenSent = (): void => {
        dispatch( onOpenSentPanel() );
    }

    const onHandleOpenMessage = (): void => {
        dispatch( onOpenMessagePanel() );
    }

    const onHandleSetPreviousPanelStatus = ( panelStatus: boolean[] ): void => {
        dispatch( onSetPreviousPanelStatus( panelStatus ) );
    }

    return {
        //* Attributes
        statePanels,
        previousPanelStatus,

        //* Methods
        onHandleOpenInbux,
        onHandleOpenSent,
        onHandleOpenMessage,
        onHandleSetPreviousPanelStatus
    }
}
