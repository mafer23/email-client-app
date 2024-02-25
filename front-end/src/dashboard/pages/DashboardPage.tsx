import "./_dashboardPage.scss";

//* Importing components
import { Header } from "../components/header/Header";
import { NavBar } from "../components/navBar/NavBar";
import { InboxPanel } from "../components/inboxPanel/InboxPanel";

//* Importing images
import iconLogo from "../../images/Logo.png";

//* Importing custom hook
import { useDashBoardPage } from "./useDashBoardPage";

export const DashboardPage = () => {

  const { statePanels } = useDashBoardPage();

  return (
    <div className="dashboardPage">
      
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
            { statePanels[0] && <InboxPanel/> }
          </div>

        </div>

      </div>

    </div>
  );

}
