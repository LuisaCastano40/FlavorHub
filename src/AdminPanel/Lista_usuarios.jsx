import { usuarios } from "./Data/Usuarios";
import { Fragment } from "react";

export function Lista_usuarios() {
  return (
    <Fragment>
      <table className="tabla-usuarios">
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Email</th>
          <th>Foto de perfil</th>
        </tr>
        {usuarios.map( usuarios =>(
          <tr key={usuarios.id}>
            <td>{usuarios.id}</td>
            <td>{usuarios.name}</td>
            <td>{usuarios.username}</td>
            <td>{usuarios.email}</td>
            <td>
            <img className="foto" src={usuarios.image} alt="Foto de perfil usurio" />
            </td>
          </tr>
        ))} 
      </table>
    </Fragment>
  )
}
export default Lista_usuarios;