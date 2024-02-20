//*Importing route system
import { AppRouter } from './router/AppRouter';

//* Importing react router
import { BrowserRouter } from 'react-router-dom';

export const EmailClientApp = () => {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}
