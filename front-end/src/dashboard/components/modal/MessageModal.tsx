import "./_messageModal.scss";

//* Importing custom hook
import { useMessageModal } from "./useMessageModal";

//* Importing plugin
import { InputSelect } from "../../../plugins/InputSelectPlugin/InputSelect";

export const MessageModal = () => {

    const { 
        onHandleCloseMessageModal, 
        formState, 
        onInputChange,
        onInputSelect,
        onSentNewMessage 
    } = useMessageModal();

    const options = [
        {value: 1, label: "mateo.olaya.aricapa@gmail.com"},
        {value: 2, label: "camila@gmail.com"}
    ]

    return (
        <div className="messageModal">

            <div className="messageModal__container">

                <h1>New Message</h1>
                <hr />

                <div className="messageModal__container__inputs">

                    <div className="messageModal__container__inputs__select">
                        <InputSelect
                            dataOptions={ options }
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
                        name="content"
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
