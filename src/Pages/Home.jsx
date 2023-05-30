import NavBar from "../Componentes/NavBar"
import Baner from "../Componentes/Baner"
import Categories from "../Componentes/Categories"
import Footer from "../Componentes/Footer"
import {Link} from "react-router-dom"
import Styles from "./Styles/Home.module.css"
import img from "../assets/Marca.png"
//Imágenes del baner
import img1 from "../assets/banner-images/salty.png"
import img2 from "../assets/banner-images/drinks.png"
import img3 from "../assets/banner-images/sweety.png"

/* import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons' */

//Shortcut rfce
export function Home() {

  const imgBaner =[img1,img2,img3];

  return (
    <>

    <header>
        <section className={Styles["NavBar"]}>
            <article className={Styles["NavBar--Logo"]}>
              <Link to = "/">
                <h2>FH</h2>
              </Link>
            </article>
            <nav className={Styles["container-NavBar"]}>
              <NavBar/>
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

    </>
  )
}
/* library.add(faCheckSquare, faCoffee) */
export default Home