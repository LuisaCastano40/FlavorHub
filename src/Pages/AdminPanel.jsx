import Administracion from "../AdminPanel/Administracion"
import Styles from "./Styles/AdminPanel.module.css"

export function AdminPanel() {
  return (
    <>
    <section className={Styles["contenedor_adminPanel"]}>
      <Administracion/>
    </section>

    </>
  )
}

export default AdminPanel