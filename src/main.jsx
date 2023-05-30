import React from 'react'
import ReactDOM from 'react-dom/client'


//Nos importa el ReactRouter
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

//Importar Nuestras páginas
import Home from './Pages/Home';
import Loging from './Pages/Loging';
import Marketing from './Pages/Marketing';
import SaltyProducts from './Pages/SaltyProducts';
import DrinksProducts from './Pages/DrinksProducts';
import DessertProducts from './Pages/DessertsProducts';
import AboutUs from './Pages/AboutUs';

//Crear las rutas dentro de la función router
const router = createBrowserRouter([
    
  {
      //Creamos la ruta a la página Home
      path: "/",
      element: <Home/>,
       //Si hay error me direcciona a Home 
      errorElement:<Navigate to = "/"/> 
    },
    {
      //Creamos la ruta a la página Loging
      path: "/Loging",
      element: <Loging/>,
    },
    {
      //Creamos la ruta a la página Marketing
      path: "/Marketing",
      element: <Marketing/>,
    },
    {
      //Creamos la ruta a la página SaltyProducts
      path: "/SaltyProducts",
      element: <SaltyProducts/>,
    },
    {
      //Creamos la ruta a la página DrinksProducts
      path: "/DrinksProducts",
      element: <DrinksProducts/>,
    },
    {
      //Creamos la ruta a la página DessertProducts
      path: "/DessertProducts",
      element: <DessertProducts/>,
    },
    {
      //Creamos la ruta a la página AboutUs
      path: "/AboutUs",
      element: <AboutUs/>,
    },
   
  ]);

ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
         <RouterProvider router={router} />
    </React.StrictMode>
);