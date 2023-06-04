import Styles from "./Styles2/Footer.module.css"
import img1 from "../assets/Icons/Instagram.png"
import img2 from "../assets/Icons/facebook.png"
import img3 from "../assets/Icons/whatsapp.png"


export function Footer() {

  
        return (
            <>
                <section className={Styles["footer__icons"]}>
                    <article className={["footer--icon"]}>   
                    <img className={Styles["images"]} src={img1} alt="instagram" />
                    </article>
                    <article className={["footer--icon"]}>
                    <img className={Styles["images"]} src={img2} alt="facebook" />
                    </article>
                    <article className={["footer--icon"]}>
                    <img className={Styles["images"]} src={img3} alt="whatsapp" />
                    </article>
                </section>
                <section className={Styles["footer__sentence"]}>
                <h3> " <strong>Naturalmente</strong> trabajando, <strong>artesanalmente</strong> produciendo, <strong>saludablemente</strong> complaciendo. "</h3>
                </section>
                <section className={Styles["footer__copy"]}>
                    Copyright © Flavor Hub 2023
                </section>


            </>
        )

}

export default Footer