//* Importing react router
import { Navigate, Route, Routes } from "react-router";

//* Importing routes for each pages
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes";

export const AppRouter = () => {

  const status: string = 'no-authenticated';

  return (
    <Routes>
        
        {
          
          ( status === 'no-authenticated' )
          ? (
            <>
              <Route path="/auth/*" element={ <AuthRoutes/> }/>
              <Route path="/*" element={ <Navigate to='/auth/login'/> }/>
            </>
          )
          : (
            <>
              <Route path="/emailClient/*" element={ <DashboardRoutes/> }/>
              <Route path="/*" element={ <Navigate to='/emailClient/dashboard'/> }/>
            </>
          )

        }

    </Routes>
  );

}
