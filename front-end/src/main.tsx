import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

//* Importing component
import { EmailClientApp } from './EmailClientApp';

//* Importing REDUX
import { Provider } from 'react-redux';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={ store }>
      <EmailClientApp/>
    </Provider>
  </React.StrictMode>,
);
