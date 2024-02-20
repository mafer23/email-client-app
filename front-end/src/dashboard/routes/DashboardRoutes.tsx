//* Importing react router
import { Route, Routes } from "react-router";

//* Importing pages
import { DashboardPage } from "../pages/DashboardPage";

export const DashboardRoutes = () => {
  return (
    <Routes>

        <Route path="/dashboard" element={ <DashboardPage/> }/>

    </Routes>
  );
}
