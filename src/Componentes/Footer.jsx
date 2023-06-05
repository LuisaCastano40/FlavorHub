import Styles from "./Styles2/Footer.module.css"
import { BoxIconElement } from "boxicons"

export function Footer() {

  
        return (
            <>
                <section className={Styles["footer__icons"]}>
                    <article className={Styles["footer--icon"]}>
                    <a href="https://www.instagram.com/anam_artem/"><box-icon className={Styles["icon"]} type='logo' name='instagram'></box-icon></a>   
                    </article>
                    <article className={Styles["footer--icon"]}>
                    <a href="https://www.facebook.com/sperezpuerta"><box-icon className={Styles["icon"]} name='facebook' type='logo' ></box-icon></a>
                    </article>
                    <article className={Styles["footer--icon"]}>
                    <a href="https://api.whatsapp.com/send?phone=%2B573194970214&text=%C2%BFEn+qu%C3%A9+te+puedo+ayudar%3F"><box-icon className={Styles["icon"]} name='whatsapp' type='logo' ></box-icon></a>
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