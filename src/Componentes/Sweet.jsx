
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../Context/Dataprovider";
import Styles from "./Styles2/Sweet.module.css"
import icon from "../assets/Icons/carrito2.png"

export function Sweet() {

    const [productSweet,setProductSweet] = useState([]);
    const value = useContext(DataContext);
    const [productos] = value.productos
    const isloggedin = localStorage.getItem('isLoggedIn');

    const addCarrito = value.addCarrito;

    useEffect(()=>{
        const elementos = productos.filter((e)=>e.id>6 && e.id <= 9);
        setProductSweet(elementos);
    },[productos])
       

  return (
    <section className={Styles["container-products"]}>
            <h2>POSTRES PARA ... <span> PERDER LA CABEZA</span></h2>
                {productSweet.map(product =>(
                <section className={Styles["container__SweetProducts"]} key={product.id}>
                    <article className={Styles["container-products--img"]}>
                        <img  src={product.url} alt="Product-sweet" />
                        <article className={Styles["content-products--name"]}>
                            <h3>{product.nombre}</h3>
                        </article> 
                    </article>

                    <article  className={Styles["container_carrito"]}>
                        <h3>${product.precio} K</h3>
                        {isloggedin ? <button onClick={() => addCarrito(product.id)}><img src={icon} alt="icon" /></button>:<></>}
                    </article>
                </section>
                ))} 
        </section>
  )
}

export default Sweet