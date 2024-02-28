import "./_messagePanel.scss";

//* Importing image
import iconPerfil from "../../../images/userProfile.png";

//* Importing Layout component
import { LayoutPanel } from "../../layout/LayoutPanel";

//* Importing custom hook
import { useMessagePanel } from "./useMessagePanel";

export const MessagePanel = () => {

  const { selectedEmail } = useMessagePanel();

  return (
    <LayoutPanel 
      isOpenMessage={ true } 
      title={ selectedEmail?.email.subject } 
      dateEmail={ selectedEmail?.email.createdAt }
    >

      <div className="messagePanel">
        
        <div className="messagePanel__information">
          
          <img src={ iconPerfil }></img>
          
          <div className="messagePanel__information__column">
            <p>{ `${ selectedEmail?.user.firstName} ${selectedEmail?.user.lastName }` }</p>
            <span>{ selectedEmail?.user.userName }</span>
          </div>
        
        </div>

        <section>
          { selectedEmail?.email.body }
        </section>
      </div>

    </LayoutPanel>
  );

}
