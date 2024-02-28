import "./_dashboardPage.scss";

//* Importing components
import { Header } from "../components/header/Header";
import { NavBar } from "../components/navBar/NavBar";
import { InboxPanel } from "../components/inboxPanel/InboxPanel";
import { SentPanel } from "../components/sentPanel/sentPanel";
import { MessageModal } from "../components/modal/MessageModal";
import { MessagePanel } from "../components/messagePanel/MessagePanel";

//* Importing images
import iconLogo from "../../images/Logo.png";

//* Importing custom hook
import { useDashBoardPage } from "./useDashBoardPage";

export const DashboardPage = () => {

  const { statePanels, messageModal } = useDashBoardPage();

  return (
    <div className="dashboardPage animate__animated animate__fadeIn">
      
      <div className="dashboardPage__container">
        
        <div className="dashboardPage__container__firstSection">

          <div className="dashboardPage__container__firstSection__logo">
            <img src={ iconLogo } alt="" />
          </div>

          <NavBar/>

        </div>

        <div className="dashboardPage__container__secondSection">

          <Header/>

          <div className="dashboardPage__container__secondSection__panels">
            { messageModal && <MessageModal/> }
            { statePanels[0] && <InboxPanel/> }
            { statePanels[1] && <SentPanel/>  }
            { statePanels[2] && <MessagePanel/>  }
          </div>

        </div>

      </div>

    </div>
  );

}
