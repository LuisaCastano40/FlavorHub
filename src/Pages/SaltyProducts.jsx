
import Carrito from "../Componentes/Carrito"
import Footer from "../Componentes/Footer"
import NavBar from "../Componentes/NavBar"
import Salty from "../Componentes/Salty"
//context
import { DataProvider } from "../Context/Dataprovider"


import Styles from "../Pages/Styles/SaltyProducts.module.css"

export function SaltyProducts() {

  return (
    <>
    <DataProvider> 
      <header>
        <NavBar/>
        <Carrito/>
      </header>
      <main>
        <section className={Styles["SaltyProducts"]}>
          <Salty/>
        </section>
      </main>
      <footer>
        <Footer/>
      </footer>
    </DataProvider>
    </>
  )
}

export default SaltyProducts