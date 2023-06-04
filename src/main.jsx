import React from 'react'
import ReactDOM from 'react-dom/client'
import { useNavigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from "react"

//Nos importa el ReactRouter
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

//Importar Nuestras páginas
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Marketing from './Pages/Marketing';
import SaltyProducts from './Pages/SaltyProducts';
import DrinksProducts from './Pages/DrinksProducts';
import DessertProducts from './Pages/DessertsProducts';
import AboutUs from './Pages/AboutUs';

const PrivateRoute = ({element: Element, isAuth, ...rest}) => {
  const navigate = useNavigate()
  
  useEffect(() => {
    //console.log(!isAuth)
    console.log(localStorage.getItem("isLoggedIn"))
    if (!isAuth) {
      navigate("/login", {replace: false})
    }
  }, [isAuth, navigate])

  // Outlet nos permite establecer un slot o espacio vacío dentro de un componente, donde podemos renderizar el resultado de una ruta.
  return isAuth ?  <Outlet /> : <h1>Authenticated</h1>;
}


//Crear las rutas dentro de la función router
const router = createBrowserRouter([
    
  {
    path: "/",
    element: <PrivateRoute isAuth={localStorage.getItem("isLoggedIn") === "true"} element={<> </>} />,
    children: [
     {
       path: "Homepage",
       element: <Home/>
     }
   ] 
   },
    
    {
      //Creamos la ruta a la página Loging
      path: "/Login",
      element: <Login/>,
      //Si hay error me direcciona a Home 
      errorElement:<Navigate to = "/"/> 
    },
    {
      //Creamos la ruta a la página Loging
      path: "/SignUp",
      element: <SignUp/>,
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

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
         <RouterProvider router={router} />
    </React.StrictMode>
);