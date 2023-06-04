import {Link} from "react-router-dom"
import Styles from "./Styles2/NavBar.module.css"
import img from "../assets/Icons/Recurso.png"
import img2 from "../assets/Icons/carrito.png"
//Firebase
import {  signOut } from "firebase/auth";
import { FirebaseAuth } from '../Firebase/Config';
//React
import { useNavigate } from 'react-router-dom';
import { useContext } from "react" 
//Context
import {DataContext} from "../Context/Dataprovider"

export function NavBar() {
  const value = useContext(DataContext);
  const [menu,setMenu] = value.menu;
  const [carrito] = value.carrito;
  
  
  const navigate = useNavigate();
 
  const changeMenu = () =>{
    setMenu(!menu);
  }

  const handleLogout = () => {               
      signOut(FirebaseAuth).then(() => {
      // Sign-out successful.
          localStorage.clear()
          navigate("/login");
          console.log("Signed out successfully")
      }).catch((error) => {
      // An error happened.
      });
    }

  return (
    <>
    <section className={Styles["contenedor__navbar"]}>
            <article className={Styles["NavBar--Logo"]}>
              <Link className={Styles["link"]} to = "/">
                    <h2>FH</h2>
              </Link>
            </article>

        <ul className={Styles["ul-list"]}>     
            <li className={Styles["il-list"]}><Link to = "" className={Styles["links"]}><h3>Categorías +</h3></Link>
              <ul>
                  <li className={Styles["il-list"]}><Link to = "/SaltyProducts" className={Styles["links"]}><h3>Recetas inspiradas en la reina María Antonieta</h3></Link></li>
                  <li className={Styles["il-list"]}><Link to = "/DrinksProducts" className={Styles["links"]}><h3>Un brindis por los buenos tiempos</h3></Link></li>
                  <li className={Styles["il-list"]}><Link to = "/DessertProducts" className={Styles["links"]}><h3>Postres para perder la cabeza</h3></Link></li>
              </ul> 
            </li>

            <li className={Styles["il-list"]}><Link to = "/Marketing" className={Styles["links"]}><h3>Sobre nuestros productos</h3></Link></li>
            <li className={Styles["il-list"]}><Link to = "/AboutUs" className={Styles["links"]}><h3>Acerca de nosotros</h3></Link></li>
            {/* <li className={Styles["il-list"]}><Link to = "/Login"><h3>Login</h3></Link></li> */}
            <img className={Styles["il-list--img"]}src={img} alt="recurso"/>
            <li className={Styles["il-list"]} onClick={handleLogout}><Link to = "/" className={Styles["links"]}><h3> Usuario<br></br> <span>SingOut</span> </h3></Link></li>

            <button className={Styles["carrito"]}> <img src={img2} alt="carrito" onClick={changeMenu}/><span className={Styles["item_total"]}>{carrito.length}</span> </button>

        </ul>
    </section>
        
    </>
    

  )
}

export default NavBar