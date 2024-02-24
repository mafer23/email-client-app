import { NavBar } from "../components/Navbar";
import { EmailPanel } from "../components/emailPanel";
import { NavMenu } from "../components/navMenu";
import "./_dashboardPage.scss";


export const DashboardPage = () => {

  return (
    <div className="dashboardPage">
      <NavBar></NavBar>
      <section className="dashboard">
        <NavMenu></NavMenu>
        <EmailPanel></EmailPanel>
      </section>

    </div>
  );
}
