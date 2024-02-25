//* Importing custom hook
import { useAuthStore } from "../../../hooks/useAuthStore"

export const useHeader = () => {
  
    //* Attributes
    const { onHandleLogoutUser, user } = useAuthStore();

    //* Methods
    const onClickButtonLogout = (): void => {
        onHandleLogoutUser();
    }

    return {
        //* Attributes
        user,

        //* Methods
        onClickButtonLogout
    }

}
