//* Importing Redux
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"

//* Importing actions
import { 
    onCloseMessageModal,
    onOpenInboxPanel, 
    onOpenMessageModal, 
    onOpenMessagePanel, 
    onOpenSentPanel, 
    onResetUiSlice, 
    onSetPreviousPanelStatus
} from "../store/slices/ui/UiSlice";

export const useUiStore = () => {

    //* Attributes
    const { 
        statePanels, 
        previousPanelStatus, 
        messageModal 
    } = useSelector((state: RootState) => state.ui);
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

    const onHandleOpenMessageModal = (): void => {
        dispatch( onOpenMessageModal() );
    }

    const onHandleCloseMessageModal = (): void => {
        dispatch( onCloseMessageModal() );
    }

    const onHandleResetUiSlice = (): void => {
        dispatch( onResetUiSlice() );
    }

    return {
        //* Attributes
        statePanels,
        previousPanelStatus,
        messageModal,

        //* Methods
        onHandleOpenInbux,
        onHandleOpenSent,
        onHandleOpenMessage,
        onHandleSetPreviousPanelStatus,
        onHandleOpenMessageModal,
        onHandleCloseMessageModal,
        onHandleResetUiSlice
    }
}
