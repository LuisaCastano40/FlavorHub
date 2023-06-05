import Styles from "./Styles2/Promocion.module.css"

//bebidas
import Recurso1 from "../assets/drinks/drink3.png";
import Recurso2 from "../assets/drinks/drink2.png";
//salados
import Recurso3 from "../assets/salty/salty3.png";
//postres
import Recurso4 from "../assets/sweety/sweet1.png";
import Recurso5 from "../assets/sweety/sweet4.png";
import Recurso6 from "../assets/sweety/sweet3.png";

export function Promocion() {
  return (
    <>
      <section className={Styles["contenedor"]}>
          <section className={Styles["contenedor-productos"]}>
            <article className={Styles["contenedor-productos--img"]}>
              <img className={Styles["Imagen"]} src={Recurso1} alt="recurso" />
              <article className={Styles["contenido-producto"]}>
                <h1 className={Styles["Titulo"]}>Marie Antoinette's Delight</h1>
                <p>Un cóctel dulce y afrutado hecho con vodka de frutas, licor de melocotón, jugo de naranja y un toque de granadina, servido en un vaso alto con hielo y una rodaja de naranja.</p>
              </article>
            </article>
          </section>

          <section className={Styles["contenedor-productos"]}>
            <article className={Styles["contenedor-productos--img"]}>
              <img className={Styles["Imagen"]} src={Recurso2} alt="recurso" />
              <article className={Styles["contenido-producto"]}>
                <h1 className={Styles["Titulo"]}>Champán de la Realeza</h1>
                <p>Una elegante mezcla de champán, licor de rosa y una pizca de azúcar, servido en una copa de champán adornada con una rosa comestible.</p>
              </article>
            </article>
          </section>

          <section className={Styles["contenedor-productos"]}>
            <article className={Styles["contenedor-productos--img"]}>
              <img className={Styles["Imagen"]} src={Recurso3} alt="recurso" />
              <article className={Styles["contenido-producto"]}>
                <h1 className={Styles["Titulo"]}>Vol-au-vents de la Reina</h1>
                <p>Canapés pequeños hechos con hojaldre y rellenos de caviar, salmón ahumado y crema agria</p>
              </article>
            </article>
          </section>

          <section className={Styles["contenedor-productos"]}>
            <article className={Styles["contenedor-productos--img"]}>
              <img className={Styles["Imagen"]} src={Recurso4} alt="recurso" />
              <article className={Styles["contenido-producto"]}>
                <h1 className={Styles["Titulo"]}>Macarons de la Realeza</h1>
                <p>Macarons de diferentes colores y sabores, como rosa, lavanda y limón, para representar la elegancia y sofisticación de la corte francesa.</p>
              </article>
            </article>
          </section>

          <section className={Styles["contenedor-productos"]}>
            <article className={Styles["contenedor-productos--img"]}>
              <img className={Styles["Imagen"]} src={Recurso5} alt="recurso" />
              <article className={Styles["contenido-producto"]}>
                <h1 className={Styles["Titulo"]}>Crème Brûlée Royale</h1>
                <p>Una versión decadente de la clásica crème brûlée, con un toque de licor de naranja y decorada con caramelizado dorado.</p>
              </article>
            </article> 
          </section>

          <section className={Styles["contenedor-productos"]}>
            <article className={Styles["contenedor-productos--img"]}>
              <img className={Styles["Imagen"]} src={Recurso6} alt="recurso" />
              <article className={Styles["contenido-producto"]}>
                <h1 className={Styles["Titulo"]}>Tartelette Versailles</h1>
                <p>Una tartaleta delicada con base de masa sablé, rellena de crema de almendras y decorada con frutas frescas de temporada.</p>
              </article>
            </article> 
        </section>
      </section>
    </>
  )
}

export default Promocion