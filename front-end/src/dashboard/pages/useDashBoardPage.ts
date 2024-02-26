//* Importing custom hook
import { useUiStore } from "../../hooks/useUiStore"

export const useDashBoardPage = () => {

    //* Attributes
    const { statePanels, messageModal } = useUiStore();
    
    //* Methods

    return {
        //* Attributes
        statePanels,
        messageModal
    
        //* Methods
    }
}
