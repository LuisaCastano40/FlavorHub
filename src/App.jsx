//Nos importa el ReactRouter
import {BrowserRouter, Routes, Route} from "react-router-dom";

//Importar Nuestras páginas
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Marketing from './Pages/Marketing';
import SaltyProducts from './Pages/SaltyProducts';
import DrinksProducts from './Pages/DrinksProducts';
import DessertProducts from './Pages/DessertsProducts';
import AboutUs from './Pages/AboutUs';
import AdminPanel from "./Pages/AdminPanel";

//Importamos el context
import { DataProvider } from "./Context/Dataprovider";
import { AuthProvider,RequireAuth} from "./Context/Auth";

  
  export function App() {

    return (
        <>  
            <BrowserRouter>
                <DataProvider>
                    <AuthProvider>
                     {/* Crear las rutas */}
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/Login' element={<Login/>}/>
                            <Route path='/SignUp' element={<SignUp/>}/>
                            <Route path='/Marketing' element={<Marketing/>}/>
                            <Route path='/SaltyProducts' element={<SaltyProducts/>}/>
                            <Route path='/DrinksProducts' element={<DrinksProducts/>}/>
                            <Route path='/DessertProducts' element={<DessertProducts/>}/>
                            <Route path='/AboutUs' element={<AboutUs/>}/>
                            <Route path='/AdminPanel' 
                            element={
                            <RequireAuth>
                                 <AdminPanel/>
                            </RequireAuth>                                                
                             }/>
                        </Routes>
                    </AuthProvider>
                </DataProvider>
            </BrowserRouter>
            
            
        </>
        
    )
  }
  
  export default App