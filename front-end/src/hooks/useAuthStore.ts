//* Importing REDUX
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store";

//* Importing actions slices
import { onLogin, onLogout } from "../store/slices/auth/AuthSlice";

//* Importing AXIOS
import emailClientApi from "../api/emailClientApi";

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

            if ( data === "Wrong password") {
                dispatch( onLogout( data ) );
            } else if ( data === `Username ${email} is not registered` ) {
                dispatch( onLogout( data ) );
            } else if ( data === "Couldn't connect to the db") {
                dispatch( onLogout( data ) );
            } else {
                dispatch( onLogin( data[0] ) );
            }

        } catch (error) {
            //console.log(error);
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
