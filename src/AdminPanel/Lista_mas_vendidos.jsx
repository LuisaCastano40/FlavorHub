import {vendidos} from "./Data/Mas_vendidos";
import { Fragment } from "react";


export function Lista_mas_vendidos() {
  return (
    <Fragment>
      <table className="tabla-vendidos">
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Mes</th>
        </tr>
        {vendidos.map( vendidos =>(
          <tr key={vendidos.id}>
            <td>{vendidos.id}</td>
            <td>{vendidos.Nombre}</td>
            <td>{vendidos.Mes}</td>
          </tr>
        ))} 
      </table>
    </Fragment>
  )
}

export default Lista_mas_vendidos;