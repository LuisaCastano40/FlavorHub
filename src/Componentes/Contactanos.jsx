import Styles from "./Styles2/Contactanos.module.css"
import img from "../assets/sweety/sweet4.png";
import img2 from "../assets/drinks/drink3.png"

export function Contactanos() {
  return (
    <>
      
        <article className={Styles["contenedor-encabezado"]}>
            <h1 className={Styles["titulo"]}>ACERCA DE NOSOTROS</h1>
        </article>

        <section className={Styles["contenedor_contactanos"]}>
            <section className={Styles["columna-1"]}> 
                <h2 className="subtitulo">Quienes Somos</h2>
                        <p>
                        Somos la personificación moderna de la opulencia y el encanto de la aristocracia francesa durante los tiempos de la reina María Antonieta. Nosotros, un grupo de mentes creativas y apasionadas, hemos unido fuerzas para recrear el esplendor y la extravagancia de aquellos días dorados. Con cada detalle cuidadosamente diseñado, nos esforzamos por ofrecer una experiencia culinaria única que deleitará tu paladar y te dejará con ganas de volver por más.
                        </p>

                        <h2 className="sub">Lo que somos</h2>
                        <p className="texto">
                        Lo que hacemos En Flavor Hub nos apasiona la calidad y la frescura
                        de nuestros productos. En cuanto a lo que hacemos, nos dedicamos a crear auténticas obras de arte que despiertan los sentidos y avivan los corazones. Nuestros productos son mucho más que meros objetos, son tesoros que encarnan la esencia misma de la belleza y el lujo.Nuestro talentoso equipo de chefs y expertos culinarios se esfuerza constantemente por crear platos irresistibles que satisfacen tus antojos más exigentes. 
                        Utilizamos ingredientes cuidadosamente seleccionados y de la más alta calidad
                        para garantizar sabores auténticos en cada bocado Nuestro menú es
                        una fusión perfecta entre los clásicos favoritos y las últimas
                        tendencias gastronómicas. 
                        Por supuesto, no nos tomamos a nosotros mismos demasiado en serio, después de todo, incluso la realeza necesita un poco de diversión. Así que, mientras navegues por nuestros salones virtuales, prepárate para encontrar esos destellos de irreverencia aristocrática que desafían las convenciones y te arrancan una sonrisa. Nos enorgullece desafiar los límites y romper con las normas establecidas, y nuestro humor negro es solo un pequeño recordatorio de que la vida es mucho más rica cuando se disfruta con una pizca de audacia. <br></br><span>¡Bienvenidos a nuestra corte, donde la belleza, el placer y una buena dosis de humor negro se unen para crear una experiencia única en su tipo!</span> 
                        </p>
            </section>
                
            <section className={Styles["columna-2"]}>
                <img className="imagen-contactanos"
                    src={img}
                    alt="imagen-contactanos"/>
                <img className="imagen-contactanos"
                    src={img2}
                    alt="imagen-contactanos"/>
            </section>
        </section>
    </>
    
  )
}

export default Contactanos