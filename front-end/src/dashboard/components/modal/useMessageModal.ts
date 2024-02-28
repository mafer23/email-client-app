import { useEffect } from "react";

//* Importing custom hook
import { useAuthStore } from "../../../hooks/useAuthStore";
import { useEmailStores } from "../../../hooks/useEmailStores";
import { useForm } from "../../../hooks/useForm";
import { useUiStore } from "../../../hooks/useUiStore"

export const useMessageModal = () => {

    //* Attributes
    const { user } = useAuthStore();
    const { onHandleCloseMessageModal } = useUiStore();
    const { formState, onInputChange, onInputSelect } = useForm({
        sender: user.userId, //* Remitente
        recipient: 0, //* Destinatario
        subject: '',
        body: '', 
    });
    const { 
        onHandleSentEmailUser, 
        onHandleAllEmailsUsers, 
        isLoading,
        emailsUsers 
    } = useEmailStores();

    //* Methods
    const onSentNewMessage = async(): Promise<void> => {
        await onHandleSentEmailUser( formState );

        if ( !isLoading ) onHandleCloseMessageModal();
    }

    //* UseEffect
    useEffect(() => {
 
        onHandleAllEmailsUsers();
        
    }, []);

    return {
        //* Attributes
        formState,
        emailsUsers,
        
        //* Methods
        onHandleCloseMessageModal,
        onInputChange,
        onSentNewMessage,
        onInputSelect
    }

}
