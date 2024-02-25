//* Importing Redux
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"

//* Importing actions
import { 
    onOpenInboxPanel, 
    onOpenMessagePanel, 
    onOpenSentPanel 
} from "../store/slices/ui/UiSlice";

export const useUiStore = () => {

    //* Attributes
    const { statePanels } = useSelector((state: RootState) => state.ui);
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

    return {
        //* Attributes
        statePanels,

        //* Methods
        onHandleOpenInbux,
        onHandleOpenSent,
        onHandleOpenMessage
    }
}
