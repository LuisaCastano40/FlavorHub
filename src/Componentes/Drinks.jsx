//import { ProductDrinks } from "../Data/ProductDrinks"
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../Context/Dataprovider";
import Styles from "./Styles2/Drinks.module.css"

export function Drinks() {

    const [productDrinks,setProductDrinks] = useState([]);
    const value = useContext(DataContext);
    const [productos] = value.productos
    console.log(productos)

    const addCarrito = value.addCarrito;

    useEffect(()=>{
        const elementos = productos.filter((e)=>e.id>3 && e.id <= 6);
        setProductDrinks(elementos);
      console.log(productDrinks)
    },[productos])

    // let id = "";
    // productos.map((item) => {
    // id = id + item.id + ", ";
    // return item;
    // });

  return (
    <section className={Styles["container-products"]}>
            <h2>UN BRINDIS POR LOS BUENOS TIEMPOS</h2>
                 {productDrinks.map(productD =>(
                <section className={Styles["container__DrinksProducts"]} key={productD.id}>
                    <article className={Styles["container-products--img"]}>
                        <img  src={productD.url} alt="Product-drinks" />
                        <article className={Styles["content-products--name"]}>
                            <h3>{productD.nombre}</h3>
                        </article> 
                    </article>

                    <article  className={Styles["container_carrito"]}>
                        <h3>${productD.precio}</h3>
                        <button onClick={() => addCarrito(productD.id)}>Agregar</button>
                    </article>
                </section>
            ))}      
        </section>
  )
}

export default Drinks