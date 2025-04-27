import { useContext } from "react";
import { DateContext } from "../context/DataContext";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

// Registrar los módulos de Chart.js
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const SecondChart = () => {
  const { selectedDate } = useContext(DateContext);

  const labels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'];

  // Generar datos aleatorios diferentes según la fecha seleccionada
  const generateData = () => {
    switch (selectedDate) {
      case "Marzo 2025":
        return labels.map(() => Math.floor(Math.random() * 100) + 20);
      case "Abril 2025":
        return labels.map(() => Math.floor(Math.random() * 80) + 10);
      case "Mayo 2025":
        return labels.map(() => Math.floor(Math.random() * 120) + 30);
      default:
        return [];
    }
  };

  const data = {
    labels,
    datasets: [
      {
        label: `Clientes Nuevos (${selectedDate})`,
        data: generateData(),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.3
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: `Clientes Nuevos - ${selectedDate}` },
    },
  };

  return <Line options={options} data={data} />;
};

export default SecondChart;
