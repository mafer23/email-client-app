import "./_dashboardPage.scss";
//* Importing images
import iconLogo from "../../images/Logo.png";
import addLogo from "../../images/add2.png";
import inboxL from "../../images/inbox.png";
import sentL from "../../images/sent.png";
import UserI from "../../images/userProfile.png"
import { useRef } from "react";


export const DashboardPage = () => {
  const userName = useRef<HTMLParagraphElement>(null);
  const sentMessages = useRef<HTMLParagraphElement>(null);
  const receivedMessages = useRef<HTMLParagraphElement>(null);
  return (
    <article className="dashboardPage">
      <section className="dashboardPage__leftContainer">

        <span className="dashboardPage__leftContainer__logoBox">
          <img src={iconLogo} className="dashboardPage__leftContainer__logoBox__logo"></img>
        </span>

        <button className="dashboardPage__leftContainer__createButton">
          <img src={addLogo} width={25} height={25}></img>
          <p>New message</p>
        </button>

        <button className="dashboardPage__leftContainer__inoutButton">
          <img src={inboxL} width={25} height={25}></img>
          <p>Inbox</p>
          <p className="dashboardPage__leftContainer__notLog" ref={receivedMessages}>1</p>
        </button>

        <button className="dashboardPage__leftContainer__inoutButton">
          <img src={sentL} width={25} height={25}></img>
          <p>Sent</p>
          <p className="dashboardPage__leftContainer__notLog" ref={sentMessages}>1</p>
        </button>

      </section>

      <section className="dashboardPage__rightContainer">
        <span className="dashboardPage__rightContainer__identity">
          <p ref={userName}>UserName</p>
          <img src={UserI} width={50} height={50}></img>
        </span>
      </section>

    </article>
  );
}
