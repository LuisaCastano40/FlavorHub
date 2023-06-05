import FormularioIngreso from "../Componentes/FormularioIngreso"
import Styles from "./Styles/Login.module.css"

//style={{backgroundColor: 'red'}}
//Shortcut rfce
export function Login() {

  return (
    <>
        <main>
          <section className={Styles["top"]}></section>
          <section className={Styles['contenedor__login']}>
            <h1><span>bienvenue</span> al login</h1>
            <FormularioIngreso/>
          </section>
          <section className={Styles["bottom"]}></section>
        </main>
    </>
  )
}

export default Login