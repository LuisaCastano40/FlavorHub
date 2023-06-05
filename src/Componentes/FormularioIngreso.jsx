import Styles from "./Styles2/FormularioIngreso.module.css"
import {useEffect, useState} from 'react';
import {Link} from "react-router-dom"
import { useNavigate} from 'react-router-dom';

//context
import { useAuth } from "../Context/Auth";

export function FormularioIngreso() {

  const auth = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isloggedin = localStorage.getItem('isLoggedIn');
  const navigate = useNavigate();
     
  const handleLogin = (e) => {
    e.preventDefault();
    auth.login(email,password);
  }
  const handleGoogle = (e) => {
    try{
      e.preventDefault();
      auth.loginWithGoogle();
    }catch(error){
      console.log(error);
    }
  }
  useEffect (()=>{
    if(isloggedin){
      navigate("/")
    }else{
      console.log("registrate")
    }
  })

  return (
    <>
      <section className={Styles["contenedor__formulario"]}>
          <form action="">
              <section className={Styles["Inputs"]}>
                <label htmlFor="email-address">Correo electrónico</label>
                <input  id="email-address" 
                        name="email" 
                        type="email" 
                        required 
                        placeholder="Ingrese su correo"
                        onChange={(e) => setEmail(e.target.value)}/>
              </section>
              <section className={Styles["Inputs"]}>
                <label htmlFor="password">Contraseña</label>
                <input  id="password"
                        name="password"
                        type="password"     
                        required 
                        placeholder="Ingrese su contraseña"
                        onChange={(e) => setPassword(e.target.value)}/>
              </section>
              <section className={Styles["btns"]}>
                <button onClick={(e)=>{handleLogin(e)}}>Ingresar</button>
                <button onClick={(e)=>{handleGoogle(e)}}>Ingresar con Google</button>
              </section>
          </form>
        </section>
        <section>
            <h3><Link to = "/SignUp" className={Styles["link"]}>¿Aún no tienes cuenta? registrate</Link></h3>
        </section>
      
    </>
  )
}

export default FormularioIngreso