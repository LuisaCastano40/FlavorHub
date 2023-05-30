import {Link} from "react-router-dom"
import Styles from "./Styles2/NavBar.module.css"
import img from "../assets/Icons/Recurso.png"

export function NavBar() {
  return (
    <>
    
        <ul className={Styles["ul-list"]}>     
            
            <li className={Styles["il-list"]}><Link to = ""><h3>Categorías +</h3></Link>
              <ul>
                  <li className={Styles["il-list"]}><Link to = "/SaltyProducts"><h3>Recetas inspiradas en la reina María Antonieta</h3></Link></li>
                  <li className={Styles["il-list"]}><Link to = "/DrinksProducts"><h3>Un brindis por los buenos tiempos</h3></Link></li>
                  <li className={Styles["il-list"]}><Link to = "/DessertProducts"><h3>Postres para perder la cabeza</h3></Link></li>
              </ul> 
            </li>

            <li className={Styles["il-list"]}><Link to = "/Marketing"><h3>Sobre nuestros productos</h3></Link></li>
            <li className={Styles["il-list"]}><Link to = "/AboutUs"><h3>Acerca de nosotros</h3></Link></li>
            <li className={Styles["il-list"]}>
              <Link to = "/Loging">
                <h3>
                  Login
                </h3>
              </Link>
            </li>
            <img className={Styles["il-list--img"]}src={img} alt="recurso"/>
            <button className={Styles["carrito"]}>comprar</button>

        </ul>
        
    </>
    

  )
}

export default NavBar