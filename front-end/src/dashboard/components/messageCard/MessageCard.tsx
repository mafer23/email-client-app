import "./_messageCard.scss";

//* Importing types
import { Received } from "../../../types/types";

//* Importing custom hook
import { useMessageCard } from "./useMessageCard";

//* Helper
import { convertDate } from "../../../helpers/convertDate";

interface MessageCardOptions {
    data: Received,
    namePanel: string;
}

export const MessageCard = ( options: MessageCardOptions ) => {

    const { onClickCard } = useMessageCard( options.namePanel!, options.data );
    const { email, sender } = options.data;
    const dateEmail = convertDate( email.createdAt );

    return (
        <div className="messageCard" onClick={ onClickCard }>
            
            <div className="messageCard__recipient">
                <div style={ {display: 'none'} }>
                    New
                </div>
                <h1>{ `${ sender.firstName } ${ sender.lastName }` }</h1>
            </div>

            <div className="messageCard__subject">
                <h1>{ email.subject }</h1>
            </div>

            <div className="messageCard__date">
                <h2>{ dateEmail }</h2>
            </div>

        </div>
    );

}
