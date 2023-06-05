import Contactanos from "../Componentes/Contactanos"
import FormContactanos from "../Componentes/FormContactanos"
import Carrito from "../Componentes/Carrito"
import Footer from "../Componentes/Footer"
import NavBar from "../Componentes/NavBar"

import Styles from "./Styles/AboutUs.module.css"

//Shortcut rfce
export function AboutUs() {
  return (
    <>
        <header>
          <NavBar/>
          <Carrito/>
        </header>

        <main>
          <section className={Styles["AboutUs"]}>
              <Contactanos/>
              <FormContactanos/>
          </section>
        </main>

        <footer>
          <Footer/>
        </footer>
        
    </>
    
  )
}

export default AboutUs