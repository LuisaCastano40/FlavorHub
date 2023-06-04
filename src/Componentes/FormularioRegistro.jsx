import {Link} from "react-router-dom"
import Styles from "./Styles2/FormularioRegistro.module.css"
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { FirebaseAuth } from '../Firebase/Config';

export function FormularioRegistro() {
        const navigate = useNavigate();
 
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('');
     
        const onSubmit = async (e) => {
          e.preventDefault()
         
          await createUserWithEmailAndPassword(FirebaseAuth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate("/login")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });
     
       
        }
  return (
    <>
    <section className={Styles["contenedor__formulario"]}>
        <form action="">
            <section className={Styles["Inputs"]}>
              <label htmlFor="Nombre-Completo">Nombre Completo</label>
              <input  id="full-name" 
                      name="namel" 
                      type="text" 
                      required 
                      placeholder="Ingrese su Nombre Completo"/>
            </section>
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
              <button type="submit" onClick={onSubmit}>Registrate</button>
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