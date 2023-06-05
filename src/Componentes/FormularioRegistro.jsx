import {Link} from "react-router-dom"
import {useState} from 'react';

import Styles from "./Styles2/FormularioRegistro.module.css"
//context
import { useAuth } from "../Context/Auth";

export function FormularioRegistro() {
        
        const auth = useAuth();
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('');
        
        const handleRegister = (e) => {
          e.preventDefault();
          auth.signup(email,password)
        }
     
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
                      onChange={(e) => setPassword(e.target.value)} />
            </section>
            <section className={Styles["btns"]}>
              <button type="submit" onClick={(e)=>{handleRegister(e)}} >Registrate</button>
            </section>   
        </form>        
    </section>
      <section>
          <h3><Link to = "/Login" className={Styles["link"]}>¿Ya estás registrado? Ingresa</Link></h3>
      </section>
    
    </>
  )
}

export default FormularioRegistro