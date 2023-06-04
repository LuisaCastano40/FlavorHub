import Styles from "./Styles2/Salty.module.css"
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../Context/Dataprovider";



export function Salty() {

    //  const [id,setId] = useState([]);

    const [productSalty,setProductSalty] = useState([]);

    const value = useContext(DataContext);
    const [productos] = value.productos;
   // const [carrito] = value.productos;
    console.log(productos);
    const addCarrito = value.addCarrito;

    useEffect(()=>{
        const elementos = productos.filter((e)=>e.id<=3);
        setProductSalty(elementos);
        console.log(productSalty);
    },[productos])

  return (

        <section className={Styles["container-products"]}>
            <h2>RECETAS INSPIRADAS EN MARÍA ANTONIETA</h2>
                 {productSalty.map(productS =>(
                <section className={Styles["container__SaltyProducts"]} key={productS.id}>
                    <article className={Styles["container-products--img"]}>
                        <img  src={productS.url} alt="Product-salty" />
                        <article className={Styles["content-products--name"]}>
                            <h3>{productS.nombre}</h3>
                        </article> 
                    </article>

                    <article  className={Styles["container_carrito"]}>
                        <h3>${productS.precio}</h3>
                        <button onClick={() => addCarrito(productS.id)}>Agregar</button>
                    </article>
                </section>
            ))}      
        </section>

   )
}

export default Salty;