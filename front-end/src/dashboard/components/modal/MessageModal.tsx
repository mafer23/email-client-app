import "./_messageModal.scss";

//* Importing custom hook
import { useMessageModal } from "./useMessageModal";

//* Importing plugin
import { InputSelect } from "../../../plugins/InputSelectPlugin/InputSelect";

export const MessageModal = () => {

    const { 
        formState, 
        emailsUsers,
        onHandleCloseMessageModal, 
        onInputChange,
        onInputSelect,
        onSentNewMessage 
    } = useMessageModal();

    return (
        <div className="messageModal">

            <div className="messageModal__container">

                <h1>New Message</h1>
                <hr />

                <div className="messageModal__container__inputs">

                    <div className="messageModal__container__inputs__select">
                        <InputSelect
                            dataOptions={ emailsUsers }
                            onSelect={ onInputSelect } 
                        />
                    </div>

                    <div className="messageModal__container__inputs__subject">

                        <input 
                            type="text" 
                            name="subject"
                            placeholder="Subject"
                            value={ formState.subject }
                            onChange={ onInputChange }
                        />

                    </div>

                </div>

                <div className="messageModal__container__content">
                    <textarea 
                        name="body"
                        value={ formState.body }
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
