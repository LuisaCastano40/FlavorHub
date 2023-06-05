import Carrito from "../Componentes/Carrito"
import Drinks from "../Componentes/Drinks"
import Footer from "../Componentes/Footer"
import NavBar from "../Componentes/NavBar"
import Styles from "../Pages/Styles/DrinksProducts.module.css"


//Shortcut rfce
export function DrinksProducts() {
  const estiloDeFondo = { backgroundColor: "red" };
  return (
    <>
    <header>
      <NavBar/>
      <Carrito/>
    </header>
    <main>
      <section className={Styles["DrinksProducts"]}>
        <Drinks/>
      </section>
    </main>
    <footer>
      <Footer/>
    </footer>
  </>
  )
}

export default DrinksProducts