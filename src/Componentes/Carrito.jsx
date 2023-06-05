import Styles from "./Styles2/Carrito.module.css"
import img from "../assets/salty/salty1.png"
import { BoxIconElement } from "boxicons"
import {DataContext} from "../Context/Dataprovider"
import { useContext } from "react"

export function Carrito() {
    const value = useContext(DataContext);
    const [menu,setMenu] = value.menu;
    const [carrito,setCarrito] = value.carrito;
    const [total] = value.total;

    const falseMenu = () =>{
        setMenu(false);
    }

    const show1 = menu ? "contenedor__carrito_show" : "contenedor__carrito";
    const show2 = menu ? "carrito_show" : "carrito";
    const show3 = carrito.length === 0 ? "carrito__vacío_show" : "carrito__vacío";

    const resta = id => {
        carrito.forEach(item=>{
            if(item.id === id){
                if(item.cantidad<=1){
                    item.cantidad = 1
                    alert("¿Demasiado deleite por un día? puedes eliminar este producto dando click en la papelera")
                }else{
                    item.cantidad -=1
                }
            }
            setCarrito([...carrito])
        })
    }
    const suma = id => {
        carrito.forEach(item=>{
            if(item.id === id){
                item.cantidad +=1
            }
            setCarrito([...carrito])
        })
    }

    const removeCarrito = (id) => {
        if (window.confirm("¿Estás seguro de querer eliminar el producto?")){
            carrito.forEach((item,index) => {
                if(item.id === id){
                    item.cantidad = 1;
                    carrito.splice(index,1)
                }
                setCarrito([...carrito])
            })
        }
    }

  return (
    <>
        <section className={Styles[show1]}>
            <section className={Styles[show2]}>
                <article className={Styles["carrito__close"]} onClick={falseMenu}>
                    <box-icon name="x"></box-icon>
                </article>
                <h2 className={Styles["titulo"]}>Contenedor de futuro placer</h2>
                <div className={Styles[show3]}>
                    <h3>¿Listo para saborear la audacia? Nuestros productos culinarios te transportarán a la época de los aristócratas más atrevidos. Sin límites, sin remordimientos. Solo placer decadente.</h3>
                </div>
                {carrito.map((producto)=> (
                    <article className={Styles["carrito__center"]} key={producto.id}>
                    {/*contenedor que se repite*/}
                        <article className={Styles["carrito__item"]}>
                            <img src={producto.url} alt="prueba"/>
                            <div>
                                <h3 className={Styles["titulo2"]}>{producto.nombre}</h3>
                                <p className={Styles["price"]}>${producto.precio} K</p>
                            </div>
                            <div className={Styles["icons"]}>
                            <box-icon type='solid' name='up-arrow-circle' onClick={()=>{suma(producto.id)}}></box-icon>
                            <p className={Styles["cantidad"]}>{producto.cantidad}</p>
                            <box-icon name='down-arrow-circle' type='solid' onClick={()=>{resta(producto.id)}}></box-icon>
                            </div>
                            <div className={Styles["remove__item"]} onClick={()=>{removeCarrito(producto.id)}}>
                            <box-icon type='solid' name='trash'></box-icon>    
                            </div>
                        </article>
                    </article>
                )) }
                    <article className={Styles["carrito__footer"]}>
                        <h3 className={Styles["titulo2"]}>Total: ${total} k</h3>
                        <button className={Styles["btn"]}>Ir a Pagar</button>
                    </article>
                
            </section>
        </section>
    </>
    
  )
}

export default Carrito