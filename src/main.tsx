import React from 'react';
import ReactDOM from 'react-dom/client'; // Corrigido aqui
import App from './App.tsx';
import './index.css';

import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Main from './components/Main/index.tsx';

const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  children: [
    {
      path: "/",
      element: <Main />
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render( // Corrigido aqui
  <React.StrictMode>
    <RouterProvider router = {router}>

    </RouterProvider>
  </React.StrictMode>
);
