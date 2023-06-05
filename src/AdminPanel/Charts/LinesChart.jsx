import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
);

var beneficios = [75.84,
    83.33,
    78.55,
    79.4,
    81.61,
    79.52,
    82.53,
    81.03,
    79.83,
    80.16,
    80.14,
    80.5]
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var midata = {
    labels: meses,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: '% satisfacción',
            data: beneficios,
            tension: 0.5,
            fill : false    ,
            borderColor: ['#590424', '#85C6A3', '#DF7B67', '#1585AC', '#9B6612', '#BF506E'][3],
            backgroundColor: ['#590424', '#85C6A3', '#DF7B67', '#1585AC', '#9B6612', '#BF506E'][3],
            pointRadius: 5,
            pointBorderColor: ['#590424', '#85C6A3', '#DF7B67', '#1585AC', '#9B6612', '#BF506E'][3],
            pointBackgroundColor: ['#590424', '#85C6A3', '#DF7B67', '#1585AC', '#9B6612', '#BF506E'][3],
        },
    ],
};

let options = {
    responsive:true,
};

export default function LinesChart() {
    return <Line data={midata} options={options}/>
}