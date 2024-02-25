import "../inboxPanel/_inboxPanel.scss";

//* Importing layout
import { LayoutPanel } from "../../layout/LayoutPanel";

//* Importing components
import { MessageCard } from "../messageCard/MessageCard";

//* Importing custom hook
import { useSentPanel } from "./useSentPanel";

export const SentPanel = () => {

    const { messageTest } = useSentPanel();

    return (
        <LayoutPanel isOpenMessage={ false } title="Sents">

            <div className="inboxPanel">

                { messageTest.map(({ dateMessage, recipient, subject }) => 
                    <MessageCard 
                        dateMessage={dateMessage}
                        recipient={recipient}
                        subject={subject}
                        namePanel="sent"
                    />
                ) } 

            </div>

        </LayoutPanel>
    );

}
