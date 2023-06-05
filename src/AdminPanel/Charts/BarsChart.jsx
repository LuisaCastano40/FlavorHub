import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var beneficios = [119567866.7511,
    119578555.0005,
    120163443.7279,
    113405170.9114,
    113304694.6685,
    129909696.9158,
    113248256.1661,
    118887685.6695,
    125308308.8867,
    123778978.9902,
    111695530.5776,
    124442665.0709]
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var misoptions = {
    responsive : true,
    animation : true,
    plugins : {
        legend : {
            display : true
        }
    },
};

var midata = {
    labels: meses,
    datasets: [
        {
            label: 'Gagancias mensuales',
            data: beneficios,
            backgroundColor: ['#590424', '#85C6A3', '#DF7B67', '#1585AC', '#9B6612', '#BF506E']
        }
    ]
};

export default function Bars() {
    return <Bar data={midata} options={misoptions} />
}