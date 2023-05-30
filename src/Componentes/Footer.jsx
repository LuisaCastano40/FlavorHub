import Styles from "./Styles2/Footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee, faBell} from '@fortawesome/free-solid-svg-icons'


export function Footer() {

  
        return (
            <>
                <section className={Styles["footer__icons"]}>
                    <article className={["footer--icon"]}>
                    <FontAwesomeIcon icon={faCheckSquare} />
                    <FontAwesomeIcon icon={faCoffee} /> 
                    <FontAwesomeIcon icon={faBell} /> 
                    
                    
                    
                    
                    </article>
                    <article className={["footer--icon"]}>

                    </article>
                    <article className={["footer--icon"]}>

                    </article>
                </section>
                <section className={Styles["footer__sentence"]}>

                </section>

            </>
        )

}

export default Footer