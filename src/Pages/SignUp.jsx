
import Styles from "./Styles/SignUp.module.css"
import FormularioRegistro from "../Componentes/FormularioRegistro"


export function SignUp() {
  return (
    <>
        <main>
          <section className={Styles["top"]}></section>
          <section className={Styles["contenedor__signup"]}>
            <h1> <span>bienvenue</span> al formulario</h1>
            <h1>de registro</h1>
            <FormularioRegistro/>
          </section>
          <section className={Styles["bottom"]}></section>
        </main>
    </>
  )
}

export default SignUp