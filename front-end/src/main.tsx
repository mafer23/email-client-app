import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

//* Importing component
import { EmailClientApp } from './EmailClientApp'; 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <EmailClientApp/>
  </React.StrictMode>,
);
