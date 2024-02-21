//* Importing REDUX
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store";

//* Importing actions slices

export const useAuthStore = () => {

    //* Attributes
    const { errorMessage, status, user } = useSelector(( state: RootState ) => state.auth);
    const dispatch = useDispatch();

    //* Methods

    return {
        //* Attributes
        status,
        user,
        errorMessage

        //* Methods
    }

}
