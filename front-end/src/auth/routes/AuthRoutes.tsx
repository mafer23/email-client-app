//* Importing react router
import { Route, Routes } from 'react-router';

//* Importing pages
import { LoginPage } from '../pages/login/LoginPage';

export const AuthRoutes = () => {
  return (
    <Routes>

        <Route path='/login' element={ <LoginPage/> }/>
        <Route path='/register' element={""}/>

    </Routes>
  );
}
