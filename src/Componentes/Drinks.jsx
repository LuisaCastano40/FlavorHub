//import { ProductDrinks } from "../Data/ProductDrinks"
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../Context/Dataprovider";
import Styles from "./Styles2/Drinks.module.css"
import icon from "../assets/Icons/carrito3.png"

export function Drinks() {

    const [productDrinks,setProductDrinks] = useState([]);
    const value = useContext(DataContext);
    const [productos] = value.productos
    const isloggedin = localStorage.getItem('isLoggedIn');

    const addCarrito = value.addCarrito;

    useEffect(()=>{
        const elementos = productos.filter((e)=>e.id>3 && e.id <= 6);
        setProductDrinks(elementos);
    },[productos])


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
                        <h3>${productD.precio} k</h3>
                        {isloggedin ? <button className="iconos" onClick={() => addCarrito(productD.id)}><img src={icon} alt="icon" /></button>: <></>}    
                    </article>
                </section>
            ))}      
        </section>
  )
}

export default Drinks