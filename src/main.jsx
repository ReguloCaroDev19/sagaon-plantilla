import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Plantilla } from './app/Plantilla';
const router = createBrowserRouter([
	{
    path: '/',
    element: <div>Hola Vercel!</div>,
  },
  {
    path: '/:id',
    element: <Plantilla />,
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
