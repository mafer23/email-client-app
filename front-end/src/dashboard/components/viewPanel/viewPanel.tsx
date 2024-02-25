import "../inboxPanel/_inboxPanel.scss";

//* Importing layout
import { LayoutPanel } from "../../layout/LayoutPanel";


//* Importing custom hook
import { useViewPanel } from "./useViewPanel";
import { MessagePanel } from "../messagePanel/MessagePanel";

export const ViewPanel = () => {

    const { messageTest } = useViewPanel();

    return (
        <LayoutPanel isOpenMessage={ true } title={messageTest.subject}>

            <div className="inboxPanel">

                <MessagePanel email={messageTest.email} user={messageTest.user} 
                message={messageTest.message} dateMessage=".." subject=".." ></MessagePanel>

            </div>

        </LayoutPanel>
    );

}