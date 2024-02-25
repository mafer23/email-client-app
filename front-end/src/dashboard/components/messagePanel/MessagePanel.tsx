import "./_messagePanel.scss";
//* Importing types
import { typeMessage } from "../../../types/types";
import userpic from "../../../images/userProfile.png"
export const MessagePanel = ({ user, message, email }: typeMessage) => {
  return (
    <div className="messagePanel">
      <div className="messagePanel__information">
        <img src={userpic}></img>
        <div className="messagePanel__information__column">
          <p>{user}</p>
          <span>{email}</span>
        </div>
      </div>

      <section>
        {message}
      </section>
    </div>
  );
}
