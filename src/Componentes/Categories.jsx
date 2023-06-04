
import img1 from "../assets/categories-images/Salty.png"
import img2 from "../assets/categories-images/Drinks.png"
import img3 from "../assets/categories-images/Sweet.png"
import Styles from "./Styles2/Categories.module.css"
import {Link} from "react-router-dom"

export function Categories() {

  return (
    <>
      <h2 className={Styles["container-categories__title"]}>Categories</h2>

      <section className={Styles["container-categories__categories"]}>

      <article className={Styles["container-categories--img"]}>
      <img src={img1} alt="categories-salty" />
        <article className={Styles["container-categories--name1"]}>
          <h3><Link to = "/SaltyProducts" className={Styles["link1"]}>Recetas inspiradas en María Antonieta</Link></h3>
        </article> 
      </article>
      
      <article className={Styles["container-categories--img"]}>
      <img src={img2} alt="categories-drinks" />
        <article className={Styles["container-categories--name2"]}>
          <h3><Link to = "/DrinksProducts" className={Styles["link2"]}>Un brindis por los buenos tiempos</Link></h3>
        </article> 
      </article>
        
      <article className={Styles["container-categories--img"]}>
      <img src={img3} alt="categories-sweety" />
        <article className={Styles["container-categories--name3"]}>
          <h3><Link to = "/DessertProducts" className={Styles["link3"]}>Postres para perder la cabeza</Link></h3>
        </article> 
      </article> 
      </section>

    </>
  )
}

export default Categories