import "./_inboxPanel.scss";

//* Importing layout
import { LayoutPanel } from "../../layout/LayoutPanel";

//* Importing components
import { MessageCard } from "../messageCard/MessageCard";

//* Importing custom hook
import { useInboxPanel } from "./useInboxPanel";

export const InboxPanel = () => {

    const { messageTest } = useInboxPanel();

    return (
        <LayoutPanel isOpenMessage={ false } title="Email Inbox">

            <div className="inboxPanel">

                { messageTest.map(({ dateMessage, recipient, subject }) => 
                    <MessageCard 
                        dateMessage={dateMessage}
                        recipient={recipient}
                        subject={subject}
                        namePanel="inbox"
                    />
                ) } 

            </div>

        </LayoutPanel>
    );

}
