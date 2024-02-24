import "../pages/_dashboardPage.scss";
//* Importing images
import UserI from "../../images/userProfile.png"

export const NavBar = () => {
    return(
        <nav className="dashboardPage__navContainer">
            <span className="dashboardPage__navContainer__logoBox">
                <p className="dashboardPage__navContainer__logoBox__logo">
                    TechEmail+
                </p>
            </span>
            <span className="dashboardPage__navContainer__identity">
                <p>UserName</p>
            <img src={UserI} width={50} height={50}></img>
        </span>
        </nav>
    );
};