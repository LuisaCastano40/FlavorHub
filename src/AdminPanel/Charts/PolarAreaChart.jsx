import { PolarArea } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
        label: 'Porcentaje de ventas',
        data: [37.87089518, 40.86903416, 21.26007066],
        backgroundColor: [
          '#1585AC',
          '#85C6A3',
          '#BF506E',
        ],
      borderWidth: 1,
    },
  ],
};

var options = {
    responsive : true,
};

export default function PolarAreas() {
  return <PolarArea data={data} options={options}/>;
}
