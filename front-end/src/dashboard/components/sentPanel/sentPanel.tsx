import "../inboxPanel/_inboxPanel.scss";

//* Importing layout
import { LayoutPanel } from "../../layout/LayoutPanel";

//* Importing components
import { MessageCard } from "../messageCard/MessageCard";

//* Importing custom hook
import { useSentPanel } from "./useSentPanel";

export const SentPanel = () => {

    const { emailSent } = useSentPanel();

    return (
        <LayoutPanel isOpenMessage={ false } title="Email Sents">

            <div className="inboxPanel">

                { emailSent.map( dataEmail => 
                    <MessageCard 
                        data={ dataEmail }
                        namePanel="sent"
                    />
                ) } 

            </div>

        </LayoutPanel>
    );

}
