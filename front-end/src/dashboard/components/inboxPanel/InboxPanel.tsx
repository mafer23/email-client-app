import "./_inboxPanel.scss";

//* Importing layout
import { LayoutPanel } from "../../layout/LayoutPanel";

//* Importing components
import { MessageCard } from "../messageCard/MessageCard";

//* Importing custom hook
import { useInboxPanel } from "./useInboxPanel";

export const InboxPanel = () => {

    const { emailsReceived } = useInboxPanel();

    return (
        <LayoutPanel isOpenMessage={ false } title="Email Inbox">

            <div className="inboxPanel">

                { emailsReceived.map( dataEmail => 
                    <MessageCard 
                        data={ dataEmail }
                        namePanel="inbox"
                    />
                ) } 

            </div>

        </LayoutPanel>
    );

}
