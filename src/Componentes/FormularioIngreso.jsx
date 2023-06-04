import Styles from "./Styles2/FormularioIngreso.module.css"
import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { FirebaseAuth } from '../Firebase/Config';
import { useNavigate } from 'react-router-dom'
import {Link} from "react-router-dom"

export function FormularioIngreso() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
     
  const onLogin = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(FirebaseAuth, email, password)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              localStorage.setItem("isLoggedIn", "true")
              localStorage.setItem("accessToken", user["accessToken"])
              localStorage.setItem("email", user["email"])
              console.log(user)
              navigate("/Homepage")


          }).catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage)
          });
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
                        onChange={(e) => setPassword(e.target.value)}/>
              </section>
              <section className={Styles["btns"]}>
                <button onClick={onLogin}>Ingresar</button>
                <button>Ingresar con Google</button>
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