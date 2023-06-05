import {Link} from "react-router-dom"
import Styles from "./Styles2/NavBar.module.css"
import img from "../assets/Icons/Recurso.png"
import img2 from "../assets/Icons/carrito.png"
import { BoxIconElement } from "boxicons"
//React
import { useContext, useState } from "react" 
//Context
import {DataContext} from "../Context/Dataprovider"
import { useAuth } from "../Context/Auth";


export function NavBar() {

  const auth = useAuth();
  const value = useContext(DataContext);
  const [menu,setMenu] = value.menu;
  const [carrito] = value.carrito;
  const isloggedin = localStorage.getItem('isLoggedIn');
  const [navBar,setnavBar] = useState(false)
  
  const changeMenu = () =>{
    setMenu(!menu);
  }
  const handleLogout = () => {
    auth.logout();
  }
  const changeNavBar = () =>{
    setnavBar(!navBar);
  }

  const shownavBar1 = navBar ? "navbar_show" : "navbar";



  return (
    <>
    <section className={Styles["contenedor__navbar"]}>
            <article className={Styles["NavBar--Logo"]}>
              <Link className={Styles["link"]} to = "/">
                    <h2>FH</h2>
              </Link>
            </article>
      <section className={Styles[shownavBar1]}>
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
            </ul>
      </section>

      {isloggedin ? 

            <> 
            <img className={Styles["il-list--img"]}src={img} alt="recurso"/>
            <li className={Styles["il-list"]} onClick={()=>{handleLogout()}}><Link to = "/" className={Styles["links"]}><h3> bienvenue<br></br><span>LogOut</span> </h3></Link></li>

            <button className={Styles["carrito"]}> <img src={img2} alt="carrito" onClick={changeMenu}/><span className={Styles["item_total"]}>{carrito.length}</span> </button>
            </>: 

            <li className={Styles["il-list"]}><Link to = "/Login"><h3>Login</h3></Link></li>}

        <article className={Styles["NavBar__open"]} onClick={changeNavBar} >
            <box-icon name='menu'></box-icon>
        </article>
    </section>
        
    </>
    

  )
}

export default NavBar