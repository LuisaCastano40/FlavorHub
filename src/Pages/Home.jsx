import {Link} from "react-router-dom"
//Componentes
import NavBar from "../Componentes/NavBar"
import Carrito from "../Componentes/Carrito"
import Baner from "../Componentes/Baner"
import Categories from "../Componentes/Categories"
import Footer from "../Componentes/Footer"
import Styles from "./Styles/Home.module.css"
import img from "../assets/Marca.png"
//Imágenes del baner
import img1 from "../assets/banner-images/salty.png"
import img2 from "../assets/banner-images/drinks.png"
import img3 from "../assets/banner-images/sweety.png"
//context
import { DataProvider } from "../Context/Dataprovider"

//Shortcut rfce
export function Home() {

  const imgBaner =[img1,img2,img3];
 
  return (
    <>
    <DataProvider>
      <header>
        <section className={Styles["NavBar"]}>
            <nav>
              <NavBar/>
              <Carrito/>
            </nav>
        </section>
        <section className={Styles["header_marca"]}>
          <img src={img} alt="marca" />
        </section>
        
      </header>

      <main>
      <section className={Styles["container-Baner"]}>
          <Baner imges = {imgBaner}/>
        </section>
        <section className={Styles["container-categories"]}>
          <Categories/>
        </section>
      </main>
      <footer>
        <section className={Styles["container-footer"]}>
        <Footer/>
        </section> 
      </footer>
    </DataProvider>
    </>
  )
}
/* library.add(faCheckSquare, faCoffee) */
export default Home