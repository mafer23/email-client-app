import "../pages/_dashboardPage.scss";
//* Importing images

import addLogo from "../../images/add2.png";
import inboxL from "../../images/inbox.png";
import sentL from "../../images/sent.png";



export const NavMenu = () =>{
    return (
        <div className="dashboardPage__menuContainer">
            <button className="dashboardPage__menuContainer__createButton">
          <img src={addLogo} width={25} height={25}></img>
          <p>New message</p>
        </button>

        <button className="dashboardPage__menuContainer__inoutButton">
          <img src={inboxL} width={25} height={25}></img>
          <p>Inbox</p>
          <p className="dashboardPage__menuContainer__notLog" >1</p>
        </button>

        <button className="dashboardPage__menuContainer__inoutButton">
          <img src={sentL} width={25} height={25}></img>
          <p>Sent</p>
          <p className="dashboardPage__menuContainer__notLog" >1</p>
        </button>
        </div>

    );
}