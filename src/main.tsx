import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './global.css'

import FAQ from './routes/FAQ';
import Contato from './routes/Contato';
import Integrantes from './routes/Integrantes';
import Sobre from './routes/Sobre';
import Home from './routes/Home';
import Error from './routes/Error';
import App from './App';

export const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <Error/>, children: [
        { path: "", element: <Home /> },
        { path: "sobre", element: <Sobre /> },
        { path: "integrantes", element: <Integrantes /> },
        { path: "contato", element: <Contato /> },
        { path: "faq", element: <FAQ /> },  
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
