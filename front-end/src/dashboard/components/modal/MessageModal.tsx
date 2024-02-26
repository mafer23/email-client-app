import "./_messageModal.scss";

//* Importing custom hook
import { useMessageModal } from "./useMessageModal";

export const MessageModal = () => {

    const { 
        onHandleCloseMessageModal, 
        formState, 
        onInputChange,
        onSentNewMessage 
    } = useMessageModal();

    return (
        <div className="messageModal">

            <div className="messageModal__container">

                <h1>New Message</h1>
                <hr />

                <div className="messageModal__container__inputs">

                    <input 
                        type="text" 
                        name="recipient"
                        placeholder="Recipient"
                        value={ formState.recipient }
                        onChange={ onInputChange }
                    />

                    <input 
                        type="text" 
                        name="subject"
                        placeholder="Subject"
                        value={ formState.subject }
                        onChange={ onInputChange }
                    />

                </div>

                <div className="messageModal__container__content">
                    <textarea 
                        name="content"
                        value={ formState.content }
                        onChange={ onInputChange }
                    />
                </div>

                <div className="messageModal__container__buttons">
                    <button onClick={ onSentNewMessage }>
                        Send
                    </button>

                    <button className="buttonCancel" onClick={ onHandleCloseMessageModal }>
                        Cancel
                    </button>
                </div>

            </div>

        </div>
    );

}
