//* Importing REDUX
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store";

//* Importing actions slices
import { onLogin } from "../store/slices/auth/AuthSlice";

export const useAuthStore = () => {

    //* Attributes
    const { errorMessage, status, user } = useSelector(( state: RootState ) => state.auth);
    const dispatch = useDispatch();

    //* Methods
    const onHandleLoginUser = (): void => {
        dispatch( onLogin({}) );
    }

    return {
        //* Attributes
        status,
        user,
        errorMessage,

        //* Methods
        onHandleLoginUser
    }

}
