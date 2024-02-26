//* Importing custom hook
import { useForm } from "../../../hooks/useForm";
import { useUiStore } from "../../../hooks/useUiStore"

export const useMessageModal = () => {

    //* Attributes
    const { onHandleCloseMessageModal } = useUiStore();
    const { formState, onInputChange } = useForm({ 
        recipient: '',
        subject: '',
        content: '' 
    });

    //* Methods
    const onSentNewMessage = (): void => {
        console.log( formState );
    }

    return {
        //* Attributes
        formState,
        
        //* Methods
        onHandleCloseMessageModal,
        onInputChange,
        onSentNewMessage
    }

}
