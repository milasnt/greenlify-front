import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Sobre from "../pages/Sobre/Sobre";
import Contato from "../pages/Contato/Contato";
import Integrantes from "../pages/Integrantes/Integrantes";
import FAQ from "../pages/FAQ/FAQ";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        { path: "", element: <Home /> },
        { path: "sobre", element: <Sobre /> },
        { path: "integrantes", element: <Integrantes /> },
        { path: "contato", element: <Contato /> },
        { path: "faq", element: <FAQ /> },  
    ]
  },
]);