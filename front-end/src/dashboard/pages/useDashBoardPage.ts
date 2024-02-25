//* Importing custom hook
import { useUiStore } from "../../hooks/useUiStore"

export const useDashBoardPage = () => {

    //* Attributes
    const { statePanels } = useUiStore();

    //* Methods

    return {
        //* Attributes
        statePanels,
    
        //* Methods
    }
}
