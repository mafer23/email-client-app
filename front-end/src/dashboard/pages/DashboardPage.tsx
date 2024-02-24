import "./_dashboardPage.scss";

//* Importing components
import { Header } from "../components/header/Header";
import { NavBar } from "../components/navBar/NavBar";

//* Importing images
import iconLogo from "../../images/Logo.png";

export const DashboardPage = () => {

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

          </div>

        </div>

      </div>

    </div>
  );

}
