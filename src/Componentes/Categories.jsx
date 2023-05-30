import { useState } from "react"
import img1 from "../assets/categories-images/Salty.png"
import img2 from "../assets/categories-images/Drinks.png"
import img3 from "../assets/categories-images/Sweet.png"
import Styles from "./Styles2/Categories.module.css"

export function Categories() {

  return (
    <>
      <h2 className={Styles["container-categories__title"]}>Categories</h2>

      <section className={Styles["container-categories__categories"]}>

      <article className={Styles["container-categories--img"]}>
      <img src={img1} alt="categories-salty" />
        <article className={Styles["container-categories--name"]}>
          <h3>Recetas inspiradas en María Antonieta</h3>
        </article> 
      </article>
      
      <article className={Styles["container-categories--img"]}>
      <img src={img2} alt="categories-drinks" />
        <article className={Styles["container-categories--name"]}>
          <h3>Un brindis por los buenos tiempos</h3>
        </article> 
      </article>
        
      <article className={Styles["container-categories--img"]}>
      <img src={img3} alt="categories-sweety" />
        <article className={Styles["container-categories--name"]}>
          <h3>Postres para perder la cabeza</h3>
        </article> 
      </article> 
      </section>

    </>
  )
}

export default Categories