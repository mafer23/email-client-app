//* Importing custom hook
import { useAuthStore } from "../../../hooks/useAuthStore"
import { useEmailStores } from "../../../hooks/useEmailStores";
import { useUiStore } from "../../../hooks/useUiStore";

export const useHeader = () => {
  
    //* Attributes
    const { onHandleLogoutUser, user } = useAuthStore();
    const { onHandleResetEmailSlice } = useEmailStores();
    const { onHandleResetUiSlice } = useUiStore();

    //* Methods
    const onClickButtonLogout = (): void => {
        onHandleResetUiSlice();
        onHandleResetEmailSlice();
        onHandleLogoutUser();
    }

    return {
        //* Attributes
        user,

        //* Methods
        onClickButtonLogout
    }

}
