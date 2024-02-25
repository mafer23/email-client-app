import "./_messageCard.scss";

//* Importing types
import { typeMessageCard } from "../../../types/types";

//* Importing custom hook
import { useMessageCard } from "./useMessageCard";

export const MessageCard = ({ recipient, subject, dateMessage, namePanel }: typeMessageCard) => {

    const { onClickCard } = useMessageCard( namePanel! );

    return (
        <div className="messageCard" onClick={ onClickCard }>
            
            <div className="messageCard__recipient">
                <div style={ {display: 'none'} }>
                    New
                </div>
                <h1>{ recipient }</h1>
            </div>

            <div className="messageCard__subject">
                <h1>{ subject }</h1>
            </div>

            <div className="messageCard__date">
                <h2>{ dateMessage }</h2>
            </div>

        </div>
    );

}
