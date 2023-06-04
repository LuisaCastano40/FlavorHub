import Carrito from "../Componentes/Carrito"
import Footer from "../Componentes/Footer"
import NavBar from "../Componentes/NavBar"
import Sweet from "../Componentes/Sweet"
import Styles from "../Pages/Styles/DessertsProducts.module.css"
import { DataProvider } from "../Context/Dataprovider"

//Shortcut rfce
export function DessertsProducts() {
  return (
      <>
      <DataProvider>
          <header>
            <NavBar/>
            <Carrito/>
          </header>
          <main>
            <section className={Styles["SweetProducts"]}>
              <Sweet/>
            </section>
          </main>
          <footer>
            <Footer/>
          </footer>
      </DataProvider>
      </>
  )
}

export default DessertsProducts