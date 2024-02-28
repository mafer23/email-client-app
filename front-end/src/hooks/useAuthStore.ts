//* Importing REDUX
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store";

//* Importing actions slices
import { onLogin, onLogout } from "../store/slices/auth/AuthSlice";

//* Importing AXIOS
import emailClientApi from "../api/emailClientApi";
import axios from "axios";

//* Importing types
import { typeLoginUser } from "../types/types";

export const useAuthStore = () => {

    //* Attributes
    const { errorMessage, status, user } = useSelector(( state: RootState ) => state.auth);
    const dispatch = useDispatch();

    //* Methods
    const onHandleLoginUser = async( { email, password }: typeLoginUser ): Promise<void> => {
        
        try {
            
            const { data } = await emailClientApi.post('/auth/login', { username: email, password });

            dispatch( onLogin( data.data ) );

        } catch ( error ) {

            if ( axios.isAxiosError(error) ) {
                const { response } = error;
                dispatch( onLogout( response?.data.data ) );
            }

        }

    }

    const onHandleLogoutUser = (): void => {
        dispatch( onLogout('Ninguno') );
    }

    return {
        //* Attributes
        status,
        user,
        errorMessage,

        //* Methods
        onHandleLoginUser,
        onHandleLogoutUser
    }

}
