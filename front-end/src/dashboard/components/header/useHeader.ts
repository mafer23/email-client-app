//* Importing custom hook
import { useAuthStore } from "../../../hooks/useAuthStore"

export const useHeader = () => {
  
    //* Attributes
    const { onHandleLogoutUser } = useAuthStore();

    //* Methods
    const onClickButtonLogout = (): void => {
        onHandleLogoutUser();
    }

    return {
        //* Attributes

        //* Methods
        onClickButtonLogout
    }

}
