import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes.jsx';
import { AppProvider } from './Context/context.jsx';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AppProvider>
  </React.StrictMode>
);
