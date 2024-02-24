//* Importing react router
import { Navigate, Route, Routes } from "react-router";

//* Importing routes for each pages
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes";

//* Importing custom hooks
import { useAuthStore } from "../hooks/useAuthStore";

export const AppRouter = () => {

  //const { status } = useAuthStore();
  //temporal
  const status:string = "authenticated";

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
