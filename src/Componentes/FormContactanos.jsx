import Styles from "./Styles2/FormContactanos.module.css"


export function FormContactanos() {
  return (
        <>

            <section className={Styles["contenedor__formulario"]}>

                <article className={Styles["contenedor-encabezado"]}>
                    < h1 className={Styles["titulo"]}>CONTÁCTANOS</h1>
                </article>

                <form className={Styles["contenedor-form"]} action="">
                    
                    <article className={Styles["Inputs"]}>
                        <label>Nombre</label>
                        <input placeholder="Ingrese su nombre" className="pr" type="text" name=""/>
                    </article>

                    <article className={Styles["Inputs"]}>
                        <label>Correo</label>
                        <input placeholder="Ingrese su correo" className="prr" type="text" name=""/>
                    </article>

                    <article class={Styles["Inputs"]}>
                        <label for="descripción"> Déjanos tu mensaje</label>
                        <textarea placeholder="¿Cuál es tu mensaje?" name="descripción"></textarea>
                    </article>

                    <button className={Styles["btn"]}>Enviar</button>
                </form>
            </section>
        </>
  )
}

export default FormContactanos