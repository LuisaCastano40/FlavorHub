import NavBar from "../Componentes/NavBar"
import Carrito from "../Componentes/Carrito"
import Promocion from "../Componentes/Promocion"
import Footer from "../Componentes/Footer"
import Styles from "./Styles/Marketing.module.css"
//Shortcut rfce
export function Marketing() {
  return (
    <>
        <header>
          <NavBar/>
          <Carrito/>
        </header>
        <main>
          <section className={Styles["marketin"]}>
            <Promocion/>
          </section>
        </main>
        <footer>
          <Footer/>
        </footer>

    </>
  )
}

export default Marketing