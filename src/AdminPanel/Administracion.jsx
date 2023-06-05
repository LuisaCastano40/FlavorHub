import { Fragment } from "react";
import './Administracion.css';
import LinesChart from "./Charts/LinesChart";
import BarsChart from "./Charts/BarsChart";
import RadarChart from "./Charts/RadarChart";
import PolarAreas from "./Charts/PolarAreaChart";
import Lista_usuarios from "./Lista_usuarios";
import Lista_mas_vendidos from "./Lista_mas_vendidos";

export function Administracion() {
  return (
    <Fragment>
        <section className="cuadritos-arriba">

            <section className="cuadritos-1">
                <p>1,031.7012</p>
                <p>Vistas Promedio</p>
            </section>

            <section className="cuadritos-2">
                <p>80.4219%</p>
                <p>Porcentaje de satifaccion</p>
            </section>

            <section className="cuadritos-3">
                <p>605</p>
                <p>Ventas mensuales promedio</p>
            </section>

            <section className="cuadritos-4">
                <p>308,680.1833</p>
                <p>Ganancias del mes</p>
            </section>
        </section>


            <section className="contenedor__grafica-lineas">

                <section className="grafica-lineas">
                        <section className="imagen-lineas">
                            <LinesChart/>
                        </section>                
                </section>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolorum nihil, maxime quas delectus iusto ipsum officiis quo ipsam eligendi sint temporibus explicabo doloremque laborum, voluptate atque doloribus? Repellat, veritatis!</p>

            </section>

            <section className="contenedor__grgaficas2">
                <section className="contenedor__grafica-barras">
                    <section className="grafica-barras">
                        <BarsChart/>
                    </section>
                    <Lista_mas_vendidos/>
                </section>

                <section className="contenedor__gráficas-redondas">
                    <section className="imagen-barras">
                    <PolarAreas/>
                    </section>

                    <section className="imagen-barras">
                        <RadarChart/>
                    </section>
                </section>
            </section>

        <section className="contenedor__usuarios">
                <Lista_usuarios/>
        </section>
    </Fragment>
  )
}

export default Administracion;